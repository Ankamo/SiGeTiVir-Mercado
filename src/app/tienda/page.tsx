'use client'

import React from 'react';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1.',
    price: 100,
    image: '/images/producto-1.jpg',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2.',
    price: 200,
    image: '/images/producto-2.jpg',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3.',
    price: 300,
    image: '/images/producto-3.jpg',
  },
  // Agrega más productos aquí...
];

const TiendaPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 p-4 text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Tienda Virtual</h1>
        <p className="mt-2 text-xl">Compra productos de la Plaza de Mercado</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-400">{product.name}</h2>
              <p className="mt-2 text-gray-300">{product.description}</p>
              <p className="mt-4 text-lg font-bold">{product.price} USD</p>
              <button
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TiendaPage;
