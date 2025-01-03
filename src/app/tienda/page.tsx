'use client';

import React, { useEffect, useState } from 'react';

const TiendaPage = () => {
  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para obtener datos de Google Sheets
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products'); // Ruta de tu API que conecta con Google Sheets
      const data = await response.json();
      setProducts(data);
      setLoading(false); // Termina la carga
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      setLoading(false);
    }
  };

  // Cargar los productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-900 p-4 text-white flex items-center justify-center">
        <p className="text-xl font-semibold">Cargando productos...</p>
      </main>
    );
  }

  // Si no hay productos disponibles
  if (!products.length) {
    return (
      <main className="min-h-screen bg-gray-900 p-4 text-white flex items-center justify-center">
        <p className="text-xl font-semibold">No hay productos disponibles en este momento.</p>
      </main>
    );
  }

  // Mostrar los productos
  return (
    <main className="min-h-screen bg-gray-900 p-4 text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Tienda Virtual</h1>
        <p className="mt-2 text-xl">Compra productos de la Plaza de Mercado</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-400">
                {product.name}
              </h2>
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
