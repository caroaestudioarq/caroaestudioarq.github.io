import ProjectGrid from '@/components/ProjectGrid';
import projects from '@/data/projects.json';
import Link from 'next/link';

const interioresProjects = projects.filter(p => p.category === 'interiores');
const apartamentos = interioresProjects.filter(p => p.subcategory === 'apartamentos');
const residencias = interioresProjects.filter(p => p.subcategory === 'residencias');

export default function InterioresPage() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-6">
            Interiores
          </h1>
          <div className="w-16 h-px bg-black mx-auto mb-6" />
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Projetos de design de interiores que transformam ambientes em experiências únicas.
          </p>
        </div>

        {/* Subcategory filters */}
        <div className="flex justify-center gap-6 mb-16">
          <Link 
            href="#apartamentos" 
            className="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
          >
            Apartamentos
          </Link>
          <span className="text-gray-300">|</span>
          <Link 
            href="#residencias" 
            className="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
          >
            Residências
          </Link>
        </div>

        {/* Apartamentos Section */}
        {apartamentos.length > 0 && (
          <section id="apartamentos" className="mb-20">
            <h2 className="text-2xl font-light tracking-wide text-black mb-8 text-center">
              Apartamentos
            </h2>
            <ProjectGrid projects={apartamentos} />
          </section>
        )}

        {/* Residencias Section */}
        {residencias.length > 0 && (
          <section id="residencias">
            <h2 className="text-2xl font-light tracking-wide text-black mb-8 text-center">
              Residências
            </h2>
            <ProjectGrid projects={residencias} />
          </section>
        )}

        {/* Show all if no subcategories */}
        {apartamentos.length === 0 && residencias.length === 0 && (
          <ProjectGrid projects={interioresProjects} />
        )}
      </div>
    </div>
  );
}
