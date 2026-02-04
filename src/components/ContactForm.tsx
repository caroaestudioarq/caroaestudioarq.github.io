'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    // In production, replace with actual form handling (Formspree, EmailJS, etc.)
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacy: false,
      });
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-light text-black mb-2">Obrigado!</h3>
        <p className="text-gray-500 font-light">
          Recebemos sua mensagem e retornaremos em breve.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-gray-500 underline hover:text-black transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-light text-gray-600 mb-2">
          Nome *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors font-light"
          placeholder="Seu nome completo"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-light text-gray-600 mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors font-light"
          placeholder="seu@email.com"
        />
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="subject" className="block text-sm font-light text-gray-600 mb-2">
          Assunto *
        </label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors font-light"
          placeholder="Assunto da mensagem"
        />
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-light text-gray-600 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors font-light resize-none"
          placeholder="Como podemos ajudar?"
        />
      </div>

      {/* Privacidade */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          required
          checked={formData.privacy}
          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
          className="mt-1 w-4 h-4 border-gray-300 text-black focus:ring-black"
        />
        <label htmlFor="privacy" className="text-sm font-light text-gray-500">
          Concordo com a política de privacidade e autorizo o contato por e-mail.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-black text-white text-sm uppercase tracking-widest font-light hover:bg-gray-900 disabled:bg-gray-400 transition-colors"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Ocorreu um erro. Por favor, tente novamente.
        </p>
      )}
    </form>
  );
}
