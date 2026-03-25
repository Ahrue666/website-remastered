import { motion } from "framer-motion";

// Add gallery image URLs here. Images from the Carrd CDN or your own hosting.
const images = [
  {
    src: "https://ahrueluster.carrd.co/assets/images/image01.jpg?v=d948aede",
    alt: "Ahrue Luster live",
  },
  {
    src: "https://ahrueluster.carrd.co/assets/images/image02.jpg?v=d948aede",
    alt: "Ahrue Luster performing",
  },
  {
    src: "https://ahrueluster.carrd.co/assets/images/image03.jpg?v=d948aede",
    alt: "Ahrue Luster on stage",
  },
  {
    src: "https://ahrueluster.carrd.co/assets/images/image04.jpg?v=d948aede",
    alt: "Ahrue Luster studio",
  },
  {
    src: "https://ahrueluster.carrd.co/assets/images/image05.jpg?v=d948aede",
    alt: "Ahrue Luster guitar",
  },
  {
    src: "https://ahrueluster.carrd.co/assets/images/image06.jpg?v=d948aede",
    alt: "Ahrue Luster press",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-16"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group aspect-square overflow-hidden border border-border"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
