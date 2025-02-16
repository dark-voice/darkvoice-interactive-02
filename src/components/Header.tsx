
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold gradient-text">
            DarkVoice
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/recursos" className="text-gray-300 hover:text-white transition-colors">
              Recursos
            </Link>
            <Link to="/precos" className="text-gray-300 hover:text-white transition-colors">
              Preços
            </Link>
            <Link to="/demo" className="text-gray-300 hover:text-white transition-colors">
              Demo
            </Link>
            <Link to="/tutorial" className="text-gray-300 hover:text-white transition-colors">
              Tutorial
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contato" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
              Começar Agora
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link 
                to="/recursos" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link 
                to="/precos" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Preços
              </Link>
              <Link 
                to="/demo" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link 
                to="/tutorial" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutorial
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contato"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Agora
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
