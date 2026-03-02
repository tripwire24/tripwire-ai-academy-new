-- Create supabase/migrations/002_rls_policies.sql

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.handouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Courses Policies
CREATE POLICY "Published courses are viewable by everyone." ON public.courses FOR SELECT USING (is_published = true OR auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer')));
CREATE POLICY "Admins can manage courses." ON public.courses FOR ALL USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Modules Policies
CREATE POLICY "Modules are viewable by enrolled users or admins/trainers." ON public.modules FOR SELECT USING (
    course_id IN (SELECT course_id FROM public.enrollments WHERE user_id = auth.uid()) OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer'))
);
CREATE POLICY "Admins can manage modules." ON public.modules FOR ALL USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Lessons Policies
CREATE POLICY "Lessons are viewable by enrolled users or admins/trainers." ON public.lessons FOR SELECT USING (
    module_id IN (SELECT id FROM public.modules WHERE course_id IN (SELECT course_id FROM public.enrollments WHERE user_id = auth.uid())) OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer'))
);
CREATE POLICY "Admins can manage lessons." ON public.lessons FOR ALL USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Enrollments Policies
CREATE POLICY "Users can view their own enrollments." ON public.enrollments FOR SELECT USING (auth.uid() = user_id OR auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer')));
CREATE POLICY "Admins can manage enrollments." ON public.enrollments FOR ALL USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Progress Policies
CREATE POLICY "Users can view and manage their own progress." ON public.progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Trainers and admins can view all progress." ON public.progress FOR SELECT USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer')));

-- Notes Policies
CREATE POLICY "Users can view and manage their own notes." ON public.notes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Trainers can view shared notes." ON public.notes FOR SELECT USING (is_shared = true AND auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer')));

-- Handouts Policies
CREATE POLICY "Handouts are viewable by enrolled users or admins/trainers." ON public.handouts FOR SELECT USING (
    course_id IN (SELECT course_id FROM public.enrollments WHERE user_id = auth.uid()) OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'trainer'))
);
CREATE POLICY "Admins can manage handouts." ON public.handouts FOR ALL USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Certificates Policies
CREATE POLICY "Users can view their own certificates." ON public.certificates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Certificates are publicly verifiable." ON public.certificates FOR SELECT USING (true);
CREATE POLICY "Admins can manage certificates." ON public.certificates FOR ALL USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));
