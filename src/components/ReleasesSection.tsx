import { motion } from "framer-motion";

const releases = [
  {
    title: "The Excuses We Cannot Make",
    band: "Lions at the Gate",
    year: "2023",
    image: "https://ahrueluster.carrd.co/assets/images/image08.jpg?v=d948aede",
    description:
      "Debut album featuring songs like Not Even Human, Drain, and Find My Way — a collaboration with Tatiana Shmayluk of Jinjer.",
    link: "https://shop.bandwear.com/products/latg021",
  },
  {
    title: "Distorted Recollections",
    band: "The Horde of Torment",
    year: "Demo Anthology",
    image: "https://ahrueluster.carrd.co/assets/images/image09.jpg?v=d948aede",
    description:
      "My first real band, formed in Las Vegas before moving into the Bay Area thrash scene. Demos newly remixed and fully restored.",
    link: "https://divebombrecords.bigcartel.com/product/the-horde-of-torment-distorted-recollections-the-demo-anthology",
  },
];

const ReleasesSection = () => {
  return (
    <section id="releases" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-16 text-center"
        >
          Latest Releases
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {releases.map((release, i) => (
            <motion.a
              key={release.title}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group block bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-body uppercase tracking-widest text-primary mb-2">
                  {release.band} &mdash; {release.year}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold uppercase tracking-wide text-foreground mb-3">
                  {release.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {release.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleasesSection;
