import { notFound } from 'next/navigation';
import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery';
import projects from '@/data/projects.json';

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Category labels
  const categoryLabels: Record<string, string> = {
    interiores: 'Interiores',
    design: 'Design',
    mostras: 'Mostras',
    incorporacao: 'Incorporação',
    comercial: 'Comercial',
  };

  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link 
                href={`/${project.category}`} 
                className="hover:text-black transition-colors"
              >
                {categoryLabels[project.category] || project.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-black">{project.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            {categoryLabels[project.category] || project.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-8">
            {project.title}
          </h1>
          <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </header>

        {/* Gallery */}
        <section className="mb-20">
          <ImageGallery images={project.gallery} projectTitle={project.title} />
        </section>

        {/* Navigation */}
        <nav className="border-t border-gray-100 pt-12">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/projeto/${prevProject.slug}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider mb-1">Anterior</p>
                  <p className="font-light">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projeto/${nextProject.slug}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors"
              >
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider mb-1">Próximo</p>
                  <p className="font-light">{nextProject.title}</p>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
