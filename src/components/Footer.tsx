import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kyues-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold">K</span>
              </div>
              <div>
                <span className="text-xl font-bold text-kyues-red">KYUES</span>
                <p className="text-sm text-gray-300">Engineering Society</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kyambogo University Engineering Society empowers future engineers through innovation, 
              collaboration, and professional development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-kyues-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kyues-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kyues-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kyues-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-kyues-red">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="text-gray-300 hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-kyues-red">Departments</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/departments/civil" className="text-gray-300 hover:text-white transition-colors">Civil Engineering</Link></li>
              <li><Link to="/departments/electrical" className="text-gray-300 hover:text-white transition-colors">Electrical Engineering</Link></li>
              <li><Link to="/departments/mechanical" className="text-gray-300 hover:text-white transition-colors">Mechanical Engineering</Link></li>
              <li><Link to="/departments/biomedical-mechatronics" className="text-gray-300 hover:text-white transition-colors">Bio-Medical & Mechatronics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-kyues-red">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-kyues-red flex-shrink-0" />
                <span className="text-gray-300">Kyambogo University, Kyambogo, Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-kyues-red flex-shrink-0" />
                <span className="text-gray-300">+256 (0) 414 285 001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-kyues-red flex-shrink-0" />
                <span className="text-gray-300">info@kyues.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Kyambogo University Engineering Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;