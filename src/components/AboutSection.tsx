import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://ahrueluster.carrd.co/assets/images/image01.jpg?v=d948aede"
              alt="Ahrue Luster"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-8">
            About Ahrue
          </h2>
          <div className="space-y-5 text-sm md:text-base text-secondary-foreground leading-relaxed font-body">
            <p>
              From the age of 14, I knew that playing loud, heavy music was my
              calling. What started as a dream grew into a passion, and through
              years of relentless work it became my career.
            </p>
            <p>
              As the former lead guitarist of <span className="text-foreground font-medium">Machine Head</span> and{" "}
              <span className="text-foreground font-medium">Ill Niño</span>, and now the guitarist of{" "}
              <span className="text-foreground font-medium">Lions at the Gate</span>, I've sold over two million
              records worldwide, co-written songs that continue to receive radio
              play and strong streaming numbers, and toured in more than 20
              countries.
            </p>
            <p>
              I've had the honor of working alongside legendary producers like
              Ross Robinson, Terry Date, Johnny K, Colin Richardson, Andy Johns,
              Dan Korneff, and Kile Odell — experiences that shaped not only my
              music, but my outlook on life.
            </p>
            <p className="text-primary italic">
              "The biggest lesson I've learned is that music is simply about
              connection."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
