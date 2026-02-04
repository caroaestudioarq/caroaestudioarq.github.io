import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  coverImage: string;
}

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

export default function ProjectGrid({ projects, title, subtitle }: ProjectGridProps) {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 font-light max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              title={project.title}
              coverImage={project.coverImage}
              category={project.category}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-light">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
