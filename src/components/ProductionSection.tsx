import { motion } from "framer-motion";

const services = [
  {
    title: "Full Production",
    description:
      "From pre-production to final mix — I'll work with you on arrangement, tracking, and sonic direction to bring your vision to life.",
  },
  {
    title: "Co-Writing",
    description:
      "Collaborative songwriting drawing on decades of experience crafting songs that have charted and been streamed worldwide.",
  },
  {
    title: "Recording",
    description:
      "Guitar tracking, editing, and arrangement for your project — whether you need one part or a full record.",
  },
  {
    title: "Mixing & Consulting",
    description:
      "Production consulting and mix feedback informed by working alongside world-class engineers and producers.",
  },
];

const credits = [
  "Ross Robinson",
  "Terry Date",
  "Johnny K",
  "Colin Richardson",
  "Andy Johns",
  "Dan Korneff",
  "Kile Odell",
];

const ProductionSection = () => {
  return (
    <section id="producing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-6"
        >
          Music Production
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-16"
        >
          With credits alongside some of the most respected producers in rock and metal, I bring
          that same level of commitment and craft to every project I take on.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {service.description}
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
            Produced alongside
          </p>
          <div className="flex flex-wrap gap-3">
            {credits.map((name) => (
              <span
                key={name}
                className="px-4 py-1.5 border border-border text-sm font-body text-muted-foreground"
              >
                {name}
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
          Inquire About Production →
        </motion.a>
      </div>
    </section>
  );
};

export default ProductionSection;
