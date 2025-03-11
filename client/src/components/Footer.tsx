import { Link } from "wouter";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vvelox Global</h3>
            <p className="text-gray-400">
              Professional immigration services to help you achieve your Canadian dream.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("why-canada")} 
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Why Canada
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pathways")} 
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  PR Pathways
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("process")} 
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  PR Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")} 
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-2 text-[#E31937]" />
                <span className="text-gray-400">123 Immigration Avenue, Mumbai, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-2 text-[#E31937]" />
                <span className="text-gray-400">+91 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-2 text-[#E31937]" />
                <span className="text-gray-400">info@vveloxglobal.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vvelox Global Business Advisory. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#">
              <a className="text-gray-400 hover:text-white text-sm transition duration-150">
                Privacy Policy
              </a>
            </Link>
            <Link href="#">
              <a className="text-gray-400 hover:text-white text-sm transition duration-150">
                Terms of Service
              </a>
            </Link>
            <Link href="#">
              <a className="text-gray-400 hover:text-white text-sm transition duration-150">
                Disclaimer
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
