// src/app/page.tsx
'use client'

import React from 'react';

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Bienvenido a SiGeTiVir</h1>
        <p className="mt-4 text-xl text-gray-600">La tienda virtual de la Plaza de Mercado</p>
      </header>

      {/* Carrusel de imágenes */}
      <section className="mt-10 w-full max-w-4xl mx-auto">
        <div className="carousel">
          <img src="/images/mercado-1.jpg" alt="Plaza de Mercado" className="w-full h-auto rounded-lg" />
          <img src="/images/mercado-2.jpg" alt="Plaza de Mercado" className="w-full h-auto rounded-lg" />
          <img src="/images/mercado-3.jpg" alt="Plaza de Mercado" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Botón para ingresar a la tienda */}
      <section className="mt-10">
        <button
          onClick={() => window.location.href = '/tienda'}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Ir a la Tienda Virtual
        </button>
      </section>
    </main>
  );
};

export default HomePage;
