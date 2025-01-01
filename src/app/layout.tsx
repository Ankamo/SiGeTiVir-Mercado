// src/app/layout.tsx

import React from 'react';
import '../styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Tienda Virtual',
  description: 'Bienvenido a nuestra tienda virtual en línea.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Categorías</h2>
            <ul>
              <li>
                <Link href="/" className="block py-2 px-4 hover:bg-gray-600 rounded">Todas</Link>
              </li>
              <li>
                <Link href="/category/electronica" className="block py-2 px-4 hover:bg-gray-600 rounded">Electrónica</Link>
              </li>
              <li>
                <Link href="/category/ropa" className="block py-2 px-4 hover:bg-gray-600 rounded">Ropa</Link>
              </li>
              <li>
                <Link href="/category/hogar" className="block py-2 px-4 hover:bg-gray-600 rounded">Hogar</Link>
              </li>
              <li>
                <Link href="/category/juguetes" className="block py-2 px-4 hover:bg-gray-600 rounded">Juguetes</Link>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
