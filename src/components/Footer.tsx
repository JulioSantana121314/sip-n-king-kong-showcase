import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary text-secondary-foreground">
      <div className="container-custom mx-auto section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-display font-bold text-gold mb-4">Sipán</h3>
            <p className="text-secondary-foreground/70 mb-4 text-sm leading-relaxed">
              Llevando la tradición lambayecana del King Kong a todas las mesas peruanas desde 1920.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-secondary-foreground/70 hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#productos" className="text-secondary-foreground/70 hover:text-gold transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="text-secondary-foreground/70 hover:text-gold transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-secondary-foreground/70 hover:text-gold transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/70 hover:text-gold transition-colors">King Kong Clásico</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-gold transition-colors">King Kong Chocolate</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-gold transition-colors">King Kong Especial</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-gold transition-colors">Pack Regalo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70 text-sm">
                  Av. Balta 123, Chiclayo, Lambayeque, Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">+51 974 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">info@sipan.pe</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">Lun - Sáb: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © 2024 Sipán. Todos los derechos reservados. Hecho con ❤️ en Lambayeque.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
