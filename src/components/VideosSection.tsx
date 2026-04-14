import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const VideosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });

  if (!isLoading && videos.length === 0) return null;

  return (
    <section id="events" className="py-24 bg-charcoal-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-4">
            Recent Functions
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-4" />
          <p className="font-body text-ivory-muted max-w-xl mx-auto text-sm">
            Relive the memorable events hosted at LIWA Convention Centre.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group overflow-hidden bg-secondary border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={video.video_url}
                  controls
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              {(video.title || video.description) && (
                <div className="p-5">
                  {video.title && (
                    <h3 className="font-heading text-lg font-semibold text-ivory mb-1">
                      {video.title}
                    </h3>
                  )}
                  {video.description && (
                    <p className="font-body text-ivory-muted text-xs leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
