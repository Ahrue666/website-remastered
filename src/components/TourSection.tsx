import { motion } from "framer-motion";

// Add upcoming tour dates here
const tourDates: {
  date: string;
  city: string;
  venue: string;
  ticketUrl: string;
}[] = [
  // Example:
  // { date: "Apr 12, 2026", city: "Los Angeles, CA", venue: "The Roxy", ticketUrl: "https://..." },
];

const TourSection = () => {
  return (
    <section id="tour" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-gradient-ember mb-16"
        >
          Tour Dates
        </motion.h2>

        {tourDates.length === 0 ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground text-base"
          >
            No upcoming dates announced — check back soon or follow on social media for updates.
          </motion.p>
        ) : (
          <div className="divide-y divide-border">
            {tourDates.map((show, i) => (
              <motion.div
                key={`${show.date}-${show.venue}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                  <span className="font-body text-sm text-primary uppercase tracking-widest w-36 shrink-0">
                    {show.date}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                      {show.city}
                    </p>
                    <p className="text-sm font-body text-muted-foreground">{show.venue}</p>
                  </div>
                </div>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-6 py-2 border border-primary text-primary text-xs font-display uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Tickets
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TourSection;
