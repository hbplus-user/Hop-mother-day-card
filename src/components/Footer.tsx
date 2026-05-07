import hbLogo from "@/assets/hb-logo.png";

export const Footer = () => (
  <footer className="relative py-12 px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={hbLogo} alt="HB+ logo" className="h-8 w-auto object-contain" />
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60 font-light">
        Crafted with care for her
      </p>
    </div>
  </footer>
);
