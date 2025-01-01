// src/app/page.tsx

'use client';  // Asegura que este componente sea un Client Component

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();  // Esto solo funcionará en un componente de cliente
  const { category } = router.query;

  // Simulamos la carga de productos, en tu caso, estos vendrían de una base de datos o API.
  useEffect(() => {
    const allProducts: Product[] = [
      { id: '1', name: 'Producto 1', price: 20, image: '/product1.jpg', category: 'electronica' },
      { id: '2', name: 'Producto 2', price: 30, image: '/product2.jpg', category: 'ropa' },
      { id: '3', name: 'Producto 3', price: 15, image: '/product3.jpg', category: 'hogar' },
      { id: '4', name: 'Producto 4', price: 25, image: '/product4.jpg', category: 'juguetes' },
      { id: '5', name: 'Producto 5', price: 50, image: '/product5.jpg', category: 'electronica' },
      // Añadir más productos según la categoría...
    ];

    // Filtrar productos según la categoría seleccionada
    const filteredProducts = category
      ? allProducts.filter((product) => product.category === category)
      : allProducts;

    setProducts(filteredProducts);
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Tienda Virtual</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">${product.price}</p>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
