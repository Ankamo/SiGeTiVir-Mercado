"use client";

import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { Inter } from "next/font/google";
import Snowflakes from "../components/fin de año/Snowflakes"; // Importamos el componente de copos

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
  
    // Definimos las fechas de inicio y fin navideño
    const startChristmas = new Date(currentYear, 11, 7); // 7 de diciembre del año actual
    const endChristmas = new Date(currentYear + 1, 0, 6, 23, 59, 59); // 6 de enero del próximo año a las 23:59:59
  
    // Si estamos en enero (antes del 6) o en diciembre (después del 7), es Navidad
    if (
      (now >= startChristmas && now.getMonth() === 11) || // Diciembre
      (now <= endChristmas && now.getMonth() === 0) // Enero
    ) {
      setIsChristmas(true);
    }
  }, []);  

  return (
    <html lang="es" className={isChristmas ? "christmas-theme" : ""}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tienda virtual y gestión de productos para la Plaza de Mercado." />
        <title>Tienda Virtual de la Plaza de Mercado</title>
      </head>
      <body className={`${inter.className} ${isChristmas ? "christmas-body" : ""}`}>
        <Header />
        <main>
          {/* Mostrar los copos de nieve si es navidad */}
          {isChristmas && <Snowflakes />}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
