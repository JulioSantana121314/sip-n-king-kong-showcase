import heroImage from "@/assets/hero-kingkong.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="King Kong tradicional peruano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Tradición Lambayecana
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            El Sabor Auténtico del
            <span className="block text-gold">King Kong</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl font-light leading-relaxed">
            Descubre el dulce más emblemático del norte peruano, elaborado artesanalmente 
            con recetas que han pasado de generación en generación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#productos" className="btn-primary text-center">
              Ver Productos
            </a>
            <a href="#nosotros" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary text-center">
              Nuestra Historia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
