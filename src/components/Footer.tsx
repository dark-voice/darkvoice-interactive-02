
import { Github, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">DarkVoice</h3>
            <p className="text-gray-400">
              Automação inteligente para seu negócio
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Recursos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Termos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DarkVoice. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
