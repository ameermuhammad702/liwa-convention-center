-- Create videos table for recent functions
CREATE TABLE public.videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  video_url text NOT NULL,
  thumbnail_url text,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view videos" ON public.videos
  FOR SELECT TO public USING (true);

CREATE POLICY "Admins can insert videos" ON public.videos
  FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update videos" ON public.videos
  FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete videos" ON public.videos
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

INSERT INTO storage.buckets (id, name, public) VALUES ('site-videos', 'site-videos', true);

CREATE POLICY "Anyone can view videos bucket" ON storage.objects
  FOR SELECT TO public USING (bucket_id = 'site-videos');

CREATE POLICY "Admins can upload videos" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'site-videos' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete videos" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'site-videos' AND has_role(auth.uid(), 'admin'::app_role));