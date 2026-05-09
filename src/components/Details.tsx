import { motion } from "framer-motion";
import { Clock, CalendarCheck } from "lucide-react";

const details = [
  {
    icon: Clock,
    title: "​",
    text: "Caring for her body shouldn't \ncome last anymore.",
  },
];

export const Details = () => {
  return (
    <section className="relative pt-4 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-primary/70 text-center mb-10 font-light"
        >
          ​Designed With Care
        </motion.h3>

        <div className="flex justify-center">
          {details.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="glow-card glass-hover p-12 md:p-16 flex flex-col items-center text-center gap-6 max-w-xl mx-auto"
            >
              <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 text-primary">
                <d.icon className="w-6 h-6" strokeWidth={1.2} />
              </div>
              <div className="space-y-3">
                <p className="font-serif text-foreground text-xs font-thin tracking-[0.2em] uppercase opacity-60">{d.title}</p>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md mx-auto whitespace-pre-line">{d.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
