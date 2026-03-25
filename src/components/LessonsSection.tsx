import { motion } from "framer-motion";

const formats = [
  {
    title: "Online Lessons",
    description:
      "Learn from anywhere via video call. Flexible scheduling to fit your timezone and lifestyle.",
  },
  {
    title: "In-Person Lessons",
    description:
      "One-on-one sessions for a hands-on experience. Contact me to discuss availability and location.",
  },
];

const topics = [
  "Technique & Mechanics",
  "Songwriting",
  "Music Theory",
  "Recording & Production",
  "Tone & Gear",
  "Stage Performance",
];

const LessonsSection = () => {
  return (
    <section id="lessons" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-6"
        >
          Guitar Lessons
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-16"
        >
          Decades of experience touring 20+ countries, selling millions of records, and working
          with legendary producers — all distilled into lessons built around where you want to go.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {formats.map((format, i) => (
            <motion.div
              key={format.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border p-8 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground mb-3">
                {format.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {format.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <p className="text-xs font-body uppercase tracking-widest text-primary mb-4">
            Topics covered
          </p>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-1.5 border border-border text-sm font-body text-muted-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-display uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
        >
          Book a Lesson →
        </motion.a>
      </div>
    </section>
  );
};

export default LessonsSection;
