'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  // Estado para controlar la imagen actual del carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes para el carrusel
  const images = [
    '/carrusel/1.jpeg',
    '/carrusel/2.jpeg',
    '/carrusel/3.jpeg',
  ];

  // Cambiar la imagen automáticamente cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [images.length]);

  const handleRedirect = () => {
    router.push('/tienda'); // Redirige a la tienda virtual
  };

  return (
    <div className="bg-gray-900 text-white">

      <main className="min-h-screen flex flex-col items-center justify-center">

        {/* Carrusel de imágenes */}
        <section className="mt-10 w-full max-w-4xl mx-auto">
          <div className="carousel flex justify-center">
            <img
              src={images[currentImageIndex]}
              alt={`Plaza de Mercado ${currentImageIndex + 1}`}
              className="w-112 h-64" // Ancho: 448px, Altura: 256px
            />
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
