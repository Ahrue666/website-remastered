import { motion } from "framer-motion";

const LatestSingleSection = () => {
  return (
    <section id="latest-single" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">
            Lions at the Gate
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember">
            Latest Single
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="aspect-video w-full max-w-4xl border border-border overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/0wqaz717ZRY"
            title="Lions at the Gate - Latest Single"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {[
            { label: "Spotify", href: "https://open.spotify.com/artist/6iFDKSolIiL9Mn0SgjBBol" },
            { label: "Apple Music", href: "https://music.apple.com/us/artist/lions-at-the-gate/1581461548" },
            { label: "YouTube", href: "https://www.youtube.com/@LionsattheGate" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-border text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestSingleSection;
