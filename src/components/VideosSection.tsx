import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "VEQiXCf3ACg", title: "Lions at the Gate - Silhouettes of Me" },
  { id: "wWDOJpDsWU0", title: "Lions at the Gate - Can't Feel the Sun" },
  { id: "yEbhoZ-CU8U", title: "Lions At The Gate - Drain" },
  { id: "XQPLMmCon90", title: "Lions At The Gate - Find My Way" },
  { id: "2lAcyjT3HY0", title: "Lions At The Gate - The Ledge" },
  { id: "x3f58_6THR4", title: "Lions At The Gate - Bed of Nails" },
  { id: "I_dOYglVUGo", title: "Ill Niño - Blood Is Thicker Than Water" },
  { id: "iQWu8IE-b6A", title: "Machine Head - Crashing Around You" },
];

const VideosSection = () => {
  return (
    <section id="videos" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-16"
        >
          Videos
        </motion.h2>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="aspect-video w-full max-w-4xl overflow-hidden border border-border">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.slice(1).map((video, i) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-video overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                <Play className="text-primary-foreground opacity-80 group-hover:opacity-100 transition-opacity" size={28} />
              </div>
              <p className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-background/80 text-[10px] md:text-xs font-body text-foreground truncate">
                {video.title}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
