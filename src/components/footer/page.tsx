// components/footer/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Enlaces de Páginas (A la izquierda) */}
        <div>
          <h4 className="font-bold text-lg mb-2">Enlaces Rápidos</h4>
          <ul>
            <li><a href="/terminos" className="hover:text-blue-500">Términos y Condiciones</a></li>
            <li><a href="/privacidad" className="hover:text-blue-500">Política de Privacidad</a></li>
            <li><a href="/sobre-nosotros" className="hover:text-blue-500">Sobre Nosotros</a></li>
            <li><a href="/contacto" className="hover:text-blue-500">Contacto</a></li>
          </ul>
        </div>

        {/* Centro (Información de contacto y Redes Sociales) */}
        <div className="text-center">
          <h4 className="font-bold text-lg mb-2">Contacto</h4>
          <ul>
            <li>Email: <a href="mailto:contacto@tiendaplaza.com" className="hover:text-blue-500">contacto@tiendaplaza.com</a></li>
            <li>Teléfono: <a href="tel:+1234567890" className="hover:text-blue-500">(123) 456-7890</a></li>
            <li>Dirección: Plaza de Mercado, Calle 123, Ciudad, País</li>
          </ul>
        </div>
        <h4 className="font-bold text-lg mt-4 mb-2">Síguenos</h4>
        <ul className="flex justify-center space-x-4">
          <li><a href="https://facebook.com/tiendaplaza" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com/tiendaplaza" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com/tiendaplaza" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://linkedin.com/company/tiendaplaza" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <div className="text-center mt-6">
      < p>Diseñado por <a href="https://nextcode-labs.vercel.app/" className="text-blue-500 hover:underline">NextCode-Labs</a></p>
        <p>&copy; 2025 SiGeTiVir. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
