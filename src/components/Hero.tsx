import content from '@/data/content.json';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gray-100">
      {/* Background image placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-6">
          {content.home.heroTitle}
        </h1>
        <p className="text-lg md:text-xl font-light text-white/90 tracking-wide">
          {content.home.heroSubtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
