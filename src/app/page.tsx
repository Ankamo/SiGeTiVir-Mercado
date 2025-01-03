'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/tienda');  // Redirige a la tienda virtual
  };

  return (
    <div className="bg-gray-900 text-white">

      <main className="min-h-screen flex flex-col items-center justify-center">

        {/* Carrusel de imágenes */}
        <section className="mt-10 w-full max-w-4xl mx-auto">
          <div className="carousel">
            <img src="/carrusel/1.jpeg" alt="Plaza de Mercado" className="w-full h-auto rounded-lg" />
            <img src="/carrusel/2.jpeg" alt="Plaza de Mercado" className="w-full h-auto rounded-lg" />
            <img src="/carrusel/3.jpeg" alt="Plaza de Mercado" className="w-full h-auto rounded-lg" />
          </div>
        </section>

        {/* Botón para ingresar a la tienda */}
        <section className="mt-10">
          <button
            onClick={handleRedirect}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Ir a la Tienda Virtual
          </button>
        </section>
      </main>

    </div>
  );
};

export default HomePage;
