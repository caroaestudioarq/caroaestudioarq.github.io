import ProjectGrid from '@/components/ProjectGrid';
import projects from '@/data/projects.json';

const incorporacaoProjects = projects.filter(p => p.category === 'incorporacao');

export default function IncorporacaoPage() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-6">
            Incorporação
          </h1>
          <div className="w-16 h-px bg-black mx-auto mb-6" />
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Empreendimentos imobiliários desenvolvidos com excelência, desde a concepção até a entrega final.
          </p>
        </div>

        {/* Projects Grid */}
        <ProjectGrid projects={incorporacaoProjects} />
      </div>
    </div>
  );
}
