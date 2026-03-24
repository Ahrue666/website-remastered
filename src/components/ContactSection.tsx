import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-6"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground font-body text-base md:text-lg mb-12 max-w-lg mx-auto"
        >
          For producing inquiries, guitar lessons, or booking — reach out below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "X / Twitter", href: "#" },
            { label: "Spotify", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-6 py-3 border border-border font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-xs font-body text-muted-foreground">
            © {new Date().getFullYear()} Ahrue Luster. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
