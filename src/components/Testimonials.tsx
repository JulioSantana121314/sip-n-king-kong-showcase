import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María García",
    location: "Lima, Perú",
    text: "El mejor King Kong que he probado. Me transportó directamente a mi infancia en Chiclayo. ¡El sabor es auténtico!",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    location: "Trujillo, Perú",
    text: "Pedí para un evento familiar y todos quedaron encantados. La calidad es excepcional y el empaque muy bonito.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    location: "Arequipa, Perú",
    text: "Descubrí Sipán por recomendación y ahora soy clienta frecuente. El King Kong de chocolate es mi favorito.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-lg card-hover border border-border">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-foreground mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de familias peruanas confían en nosotros para llevar dulzura a sus hogares.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
