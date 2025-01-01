// src/app/layout.tsx

import React from 'react';
import '../styles/globals.css';  // Este archivo es para los estilos globales (como Tailwind)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sistema de Gestión de la Tienda Virtual de la Plaza de Mercado',
  description: 'Tienda virtual y gestión de productos para la Plaza de Mercado.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-3xl font-bold">Sistema de Gestión de la Tienda Virtual de la Plaza de Mercado</h1>
        </header>

        {/* Contenido principal */}
        <main>{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center mt-10">
          <p>&copy; 2025 SiGeTiVir. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
