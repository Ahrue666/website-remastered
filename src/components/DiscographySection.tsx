import { motion } from "framer-motion";

const albums = [
  { title: "The Burning Red", year: "1999", band: "Machine Head", producer: "Ross Robinson", image: "https://ahrueluster.carrd.co/assets/images/image04.jpg?v=d948aede", link: "https://open.spotify.com/album/3hOfgUH1xNzCeJgANjO5dA" },
  { title: "Supercharger", year: "2001", band: "Machine Head", producer: "Johnny K", image: "https://ahrueluster.carrd.co/assets/images/image18.jpg?v=d948aede" },
  { title: "Hellalive", year: "2003", band: "Machine Head", producer: "Machine Head", image: "https://ahrueluster.carrd.co/assets/images/image19.jpg?v=d948aede" },
  { title: "Confession", year: "2003", band: "Ill Niño", producer: "Bob Marlette", image: "https://ahrueluster.carrd.co/assets/images/image05.jpg?v=d948aede" },
  { title: "One Nation Underground", year: "2005", band: "Ill Niño", producer: "Eddie Wohl", image: "https://ahrueluster.carrd.co/assets/images/image06.jpg?v=d948aede" },
  { title: "The Undercover Sessions", year: "2006", band: "Ill Niño", producer: "Andy Johns", image: "https://ahrueluster.carrd.co/assets/images/image17.jpg?v=d948aede" },
  { title: "Enigma", year: "2008", band: "Ill Niño", producer: "Eddie Wohl", image: "https://ahrueluster.carrd.co/assets/images/image10.jpg?v=d948aede" },
  { title: "Dead New World", year: "2010", band: "Ill Niño", producer: "Sahaj Ticotin", image: "https://ahrueluster.carrd.co/assets/images/image11.jpg?v=d948aede" },
  { title: "Epidemia", year: "2012", band: "Ill Niño", producer: "Ill Niño", image: "https://ahrueluster.carrd.co/assets/images/image12.jpg?v=d948aede" },
  { title: "Till Death, La Familia", year: "2014", band: "Ill Niño", producer: "Eddie Wohl", image: "https://ahrueluster.carrd.co/assets/images/image15.jpg?v=d948aede" },
  { title: "Reign of Terror", year: "2018", band: "Terror Universal", producer: "Ahrue Luster", image: "https://ahrueluster.carrd.co/assets/images/image16.jpg?v=d948aede" },
  { title: "The Excuses We Cannot Make", year: "2023", band: "Lions at the Gate", producer: "Kile Odell", image: "https://ahrueluster.carrd.co/assets/images/image03.jpg?v=d948aede" },
];

const DiscographySection = () => {
  return (
    <section id="discography" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-16"
        >
          Discography
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {albums.map((album, i) => (
            <motion.div
              key={album.title + album.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden border border-border group-hover:border-primary/30 transition-colors mb-3">
                <img
                  src={album.image}
                  alt={album.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-display text-xs uppercase tracking-wide text-foreground leading-tight">
                {album.title}
              </p>
              <p className="text-[10px] font-body text-muted-foreground mt-0.5">
                {album.band} &middot; {album.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;
