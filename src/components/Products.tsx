import kingkongClasico from "@/assets/kingkong-clasico.jpg";
import kingkongChocolate from "@/assets/kingkong-chocolate.jpg";
import kingkongEspecial from "@/assets/kingkong-especial.jpg";
import kingkongMini from "@/assets/kingkong-mini.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "King Kong Clásico",
    description: "El tradicional con manjar blanco cremoso entre capas de galleta artesanal.",
    price: 25.00,
    image: kingkongClasico,
  },
  {
    id: 2,
    name: "King Kong Chocolate",
    description: "Una deliciosa variante con manjar de chocolate y galleta de cacao.",
    price: 28.00,
    image: kingkongChocolate,
  },
  {
    id: 3,
    name: "King Kong Especial",
    description: "Tres sabores en uno: manjar blanco, maní y dulce de piña.",
    price: 32.00,
    image: kingkongEspecial,
  },
  {
    id: 4,
    name: "King Kong Mini Pack",
    description: "Caja de 6 mini King Kong perfectos para regalo o compartir.",
    price: 35.00,
    image: kingkongMini,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            S/ {product.price.toFixed(2)}
          </span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-secondary hover:shadow-md active:scale-95">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="productos" className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Dulzura en Cada Bocado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada King Kong es elaborado con ingredientes seleccionados y el amor 
            de nuestros maestros pasteleros lambayecanos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
