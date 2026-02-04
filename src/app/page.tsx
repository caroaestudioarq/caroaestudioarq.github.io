import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Link from 'next/link';
import projects from '@/data/projects.json';

// Pegar projetos em destaque (marcados com featured: true)
const featuredProjects = projects.filter((p: any) => p.featured === true);

const categories = [
  { name: 'Interiores', href: '/interiores', description: 'Apartamentos e Residências' },
  { name: 'Design', href: '/design', description: 'Mobiliário e Objetos' },
  { name: 'Mostras', href: '/mostras', description: 'Exposições e Eventos' },
  { name: 'Arquitetônico', href: '/arquitetonico', description: 'Projetos arquitetônicos residenciais e comerciais' },
  { name: 'Comercial', href: '/comercial', description: 'Escritórios e Restaurantes' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              Conheça alguns de nossos trabalhos mais recentes
            </p>
          </div>

          <ProjectGrid projects={featuredProjects as typeof projects} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
              Áreas de Atuação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group p-8 bg-white border border-gray-100 hover:border-black transition-colors text-center"
              >
                <h3 className="text-lg font-light tracking-wide text-black mb-2 group-hover:tracking-wider transition-all">
                  {category.name}
                </h3>
                <p className="text-sm font-light text-gray-400">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-6">
            Vamos criar algo extraordinário juntos?
          </h2>
          <p className="text-gray-500 font-light mb-10 max-w-2xl mx-auto">
            Entre em contato conosco para transformar seu espaço em uma experiência única.
          </p>
          <Link
            href="/contato"
            className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-widest font-light hover:bg-gray-900 transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
