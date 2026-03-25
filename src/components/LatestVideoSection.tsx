import { motion } from "framer-motion";

const LatestVideoSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-8 text-center"
        >
          Latest Video
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video w-full overflow-hidden border border-border">
            <iframe
              src="https://www.youtube.com/embed/0wqaz717ZRY"
              title="Latest Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestVideoSection;
