import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  slug: string;
  title: string;
  coverImage: string;
  category: string;
}

export default function ProjectCard({ slug, title, coverImage, category }: ProjectCardProps) {
  return (
    <Link 
      href={`/projeto/${slug}`}
      className="group block relative aspect-[4/3] overflow-hidden bg-gray-100"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Title */}
      <div className="absolute inset-0 flex items-end p-6">
        <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-xs uppercase tracking-widest text-white/80 mb-1">
            {category}
          </p>
          <h3 className="text-xl font-light text-white tracking-wide">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
