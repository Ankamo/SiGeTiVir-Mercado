import React from 'react';
import '../styles/globals.css'; 
import Header from '../components/header/page';  // Importamos el componente Header
import Footer from '../components/footer/page';  // Importamos el componente Footer
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tienda Virtual de la Plaza de Mercado',
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
      <Header />  {/* Usamos el componente Header */}


        {/* Contenido principal */}
        <main>{children}</main>

        <Footer />  {/* Usamos el componente Footer */}

      </body>
    </html>
  );
};

export default Layout;
