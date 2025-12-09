const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Tradición que se Saborea desde 1920
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                El King Kong es un dulce tradicional originario de Lambayeque, al norte del Perú. 
                Su nombre proviene del famoso gorila de las películas, debido a su gran tamaño 
                que lo hacía parecer "gigante" entre los demás dulces.
              </p>
              <p>
                En <span className="text-primary font-semibold">Sipán</span>, honramos esta 
                tradición centenaria utilizando las mismas técnicas artesanales de nuestros 
                antepasados, combinando galletas crujientes con el más cremoso manjar blanco.
              </p>
              <p>
                Cada pieza es elaborada a mano en nuestro taller de Lambayeque, garantizando 
                la calidad y autenticidad que nos caracteriza.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <span className="text-4xl font-display font-bold text-primary">100+</span>
                <p className="text-muted-foreground text-sm">Años de tradición</p>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-primary">50K+</span>
                <p className="text-muted-foreground text-sm">Clientes felices</p>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-primary">100%</span>
                <p className="text-muted-foreground text-sm">Artesanal</p>
              </div>
            </div>
          </div>

          {/* Decorative Pattern */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-gold/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">🍪</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Receta Familiar
                </h3>
                <p className="text-muted-foreground">
                  Transmitida de generación en generación
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
