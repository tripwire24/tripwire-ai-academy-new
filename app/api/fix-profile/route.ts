import { createClient } from "@/src/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: existingProfile } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .single();

  if (existingProfile) {
    return NextResponse.json({ message: "Profile already exists", profile: existingProfile });
  }

  const { data: newProfile, error: insertError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name || user.email?.split("@")[0] || "",
      role: "learner",
    })
    .select()
    .single();

  if (insertError) {
    return NextResponse.json(
      { error: "Could not create profile. Run the SQL migration in Supabase first.", details: insertError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Profile created", profile: newProfile });
}

export async function GET() {
  const supabase = await createClient();
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return NextResponse.json({
    user: { id: user.id, email: user.email },
    profile: profile || null,
    hasProfile: !!profile,
  });
}
