import ContactForm from '@/components/ContactForm';
import content from '@/data/content.json';
import SocialLinks from '@/components/SocialLinks';

export default function ContatoPage() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-6">
            Contato
          </h1>
          <div className="w-16 h-px bg-black mx-auto mb-6" />
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Estamos prontos para transformar seus sonhos em realidade. Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-light tracking-wide text-black mb-8">
              Informações
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Endereço
                </h3>
                <p className="text-gray-600 font-light">
                  {content.contact.address}
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Telefone
                </h3>
                <a 
                  href={`tel:${content.contact.phone.replace(/\s/g, '')}`}
                  className="text-gray-600 font-light hover:text-black transition-colors"
                >
                  {content.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  E-mail
                </h3>
                <a 
                  href={`mailto:${content.contact.email}`}
                  className="text-gray-600 font-light hover:text-black transition-colors"
                >
                  {content.contact.email}
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Redes Sociais
                </h3>
                <SocialLinks instagram={content.contact.instagram} whatsapp={content.contact.whatsapp} />
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 aspect-video bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Mapa em breve</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light tracking-wide text-black mb-8">
              Envie uma Mensagem
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
