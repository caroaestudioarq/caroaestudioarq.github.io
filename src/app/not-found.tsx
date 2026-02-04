import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-light text-black mb-4">404</h1>
        <h2 className="text-2xl font-light text-gray-600 mb-8">
          Página não encontrada
        </h2>
        <p className="text-gray-400 font-light mb-10 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-widest font-light hover:bg-gray-900 transition-colors"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
