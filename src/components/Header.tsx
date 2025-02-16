
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Recursos", to: "recursos" },
    { title: "Tutorial", to: "tutorial" },
    { title: "Preços", to: "precos" },
    { title: "Contato", to: "contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <ScrollLink 
            to="hero" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            DarkVoice
          </ScrollLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.title}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contato"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Começar Agora
            </ScrollLink>
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
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contato"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors text-center cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Agora
              </ScrollLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
