import content from '@/data/content.json';

export default function SobrePage() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-6">
            Sobre Nós
          </h1>
          <div className="w-16 h-px bg-black mx-auto" />
        </div>

        {/* Intro */}
        <div className="mb-20">
          <p className="text-lg font-light text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            {content.about.intro}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {content.about.pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <h2 className="text-xl font-light tracking-wide text-black mb-4">
                {pillar.title}
              </h2>
              <div className="w-8 h-px bg-gray-300 mx-auto mb-4" />
              <p className="text-sm font-light text-gray-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center py-12 border-t border-gray-100">
          <h2 className="text-2xl font-light tracking-wide text-black mb-8">
            Nossa Filosofia
          </h2>
          <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            Acreditamos que a arquitetura tem o poder de transformar vidas. Cada projeto é uma oportunidade 
            de criar espaços que inspiram, acolhem e refletem a essência de quem os habita. Nossa abordagem 
            une estética refinada, funcionalidade e atenção aos detalhes, sempre respeitando a identidade 
            única de cada cliente.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100">
          {[
            { label: 'Anos de Experiência', value: '10+' },
            { label: 'Projetos Realizados', value: '150+' },
            { label: 'Clientes Satisfeitos', value: '200+' },
            { label: 'Prêmios', value: '12' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-light text-black mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
