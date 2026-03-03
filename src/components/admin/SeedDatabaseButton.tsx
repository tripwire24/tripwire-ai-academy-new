"use client";

import { useState } from "react";
import { Database, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function SeedDatabaseButton() {
  const [seeding, setSeeding] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSeed = async () => {
    if (!confirm("This will import all course content from static files into Supabase. Continue?")) {
      return;
    }

    setSeeding(true);
    setResult(null);

    try {
      const response = await fetch("/api/admin/seed", { method: "POST" });
      const data = await response.json();

      if (response.ok) {
        setResult({
          success: true,
          message: data.message + (data.errors.length > 0 ? ` (${data.errors.length} warnings)` : ""),
        });
      } else {
        setResult({
          success: false,
          message: data.error || "Failed to seed database",
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Network error - failed to seed",
      });
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-secondary/50 transition-colors">
      <div className="flex items-center gap-3">
        <Database className="h-5 w-5 text-amber-500" />
        <div>
          <p className="font-medium text-sm">Seed Database</p>
          <p className="text-xs text-muted-foreground">
            Import static content to Supabase
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {result && (
          <span
            className={`text-xs flex items-center gap-1 ${
              result.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {result.success ? (
              <CheckCircle2 className="h-3 w-3" />
            ) : (
              <AlertCircle className="h-3 w-3" />
            )}
            {result.message}
          </span>
        )}
        <button
          onClick={handleSeed}
          disabled={seeding}
          className="rounded-md bg-amber-500 text-white px-3 py-1.5 text-xs font-medium hover:bg-amber-600 transition-colors disabled:opacity-50"
        >
          {seeding ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Import"
          )}
        </button>
      </div>
    </div>
  );
}
