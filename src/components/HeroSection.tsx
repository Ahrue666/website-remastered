import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Concert stage"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Guitarist &nbsp;|&nbsp; Songwriter &nbsp;|&nbsp; Producer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tight text-gradient-ember mb-8"
        >
          Ahrue
          <br />
          Luster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-body text-secondary-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10"
        >
          "With decades of experience touring the world, selling millions of
          records, and working with legendary producers, I'm passionate about
          sharing my knowledge with others."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-ember-btn px-8 py-4 font-display text-sm uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Producing <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-primary/50 px-8 py-4 font-display text-sm uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
          >
            Lessons <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-6 mt-16"
        >
          {[
            { icon: "Instagram", url: "#" },
            { icon: "Facebook", url: "#" },
            { icon: "X", url: "#" },
            { icon: "Spotify", url: "#" },
          ].map((social) => (
            <a
              key={social.icon}
              href={social.url}
              className="text-muted-foreground hover:text-primary transition-colors text-xs font-body uppercase tracking-widest"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
