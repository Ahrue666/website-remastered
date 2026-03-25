import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  // Lions at the Gate
  { id: "0wqaz717ZRY", title: "Lions At The Gate - Latest Video" },
  { id: "VEQiXCf3ACg", title: "Lions at the Gate - Silhouettes of Me" },
  { id: "wWDOJpDsWU0", title: "Lions at the Gate - Can't Feel the Sun" },
  { id: "yEbhoZ-CU8U", title: "Lions At The Gate - Drain" },
  { id: "XQPLMmCon90", title: "Lions At The Gate - Find My Way" },
  { id: "2lAcyjT3HY0", title: "Lions At The Gate - The Ledge" },
  { id: "x3f58_6THR4", title: "Lions At The Gate - Bed of Nails" },
  { id: "orM4qcU413w", title: "Lions At The Gate - Scapegoat" },
  { id: "mnDhtgsCXJw", title: "Lions At The Gate - Not Even Human" },
  // Ill Niño
  { id: "I_dOYglVUGo", title: "Ill Niño - Blood Is Thicker Than Water" },
  { id: "q5JsrxnLbh8", title: "Ill Niño - I'm Not the Enemy" },
  { id: "D3ptlELrS9Y", title: "Ill Niño - Live Like There's No Tomorrow" },
  { id: "WDYL7dkGHdY", title: "Ill Niño - Forgive Me Father" },
  { id: "MM18GqottJM", title: "Ill Niño - La Epidemia" },
  { id: "6He0ImarwPA", title: "Ill Niño - Bleed Like You" },
  { id: "mkHc6DhRA3k", title: "Ill Niño - Against the Wall" },
  { id: "7aGsdoBDiXw", title: "Ill Niño - This is War" },
  { id: "PEv9knEqGcU", title: "Ill Niño - What You Deserve" },
  { id: "UVo1EWEm13o", title: "Ill Niño - This Time's For Real" },
  { id: "rNH4IdCJZf8", title: "Ill Niño - How Can I Live" },
  // Machine Head
  { id: "iQWu8IE-b6A", title: "Machine Head - Crashing Around You" },
  { id: "HJzeJiHHQOY", title: "Machine Head - From This Day" },
];

const VideosSection = () => {
  return (
    <section id="videos" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-16 text-center"
        >
          Official Videos
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {videos.map((video, i) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group"
            >
              <div className="aspect-video overflow-hidden border border-border group-hover:border-primary/30 transition-colors mb-2">
                <div className="relative w-full h-full">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                    <Play className="text-primary-foreground opacity-80 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                </div>
              </div>
              <p className="font-display text-[10px] md:text-xs uppercase tracking-wide text-foreground leading-tight truncate">
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
