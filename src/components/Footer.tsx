import Link from 'next/link';
import content from '@/data/content.json';
import SocialLinks from './SocialLinks';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Interiores', href: '/interiores' },
  { name: 'Design', href: '/design' },
  { name: 'Mostras', href: '/mostras' },
  { name: 'Incorporação', href: '/incorporacao' },
  { name: 'Comercial', href: '/comercial' },
  { name: 'Contato', href: '/contato' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-xl font-light tracking-widest uppercase text-black mb-4">
              Estúdio Caroá
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {content.siteDescription}
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-black mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-gray-500 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-black mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-sm font-light text-gray-500">
              <li>{content.contact.address}</li>
              <li>{content.contact.phone}</li>
              <li>
                <a 
                  href={`mailto:${content.contact.email}`}
                  className="hover:text-black transition-colors"
                >
                  {content.contact.email}
                </a>
              </li>
            </ul>
            
            {/* Redes sociais */}
            <SocialLinks instagram={content.contact.instagram} whatsapp={content.contact.whatsapp} className="mt-6" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-light">
            © Estúdio Caroá {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400 font-light">
            webdesign | Estúdio Caroá
          </p>
        </div>
      </div>
    </footer>
  );
}
