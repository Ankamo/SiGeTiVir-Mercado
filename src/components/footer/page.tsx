// components/footer/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-1 px-4 mt-10">
      {/* Contenedor principal dividido en tres secciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Sección Izquierda: Enlaces de Páginas */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="/terminos" className="hover:text-blue-300">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="/privacidad" className="hover:text-blue-300">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="/sobre-nosotros" className="hover:text-blue-300">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-blue-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección Centro: Información de Contacto */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-lg mb-4">Contacto</h4>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:contacto@tiendaplaza.com"
                className="hover:text-blue-300"
              >
                <br />serregionales@girardot-cundinamarca.gov.co
              </a>
            </li>
            <li>
              Teléfono:{" "}
              <a href="tel:+1234567890" className="hover:text-blue-300">
                (123) 456-7890
              </a>
            </li>
            <li>Dirección: Calle 11 # 9 - 01 Girardot - Cundinamarca</li>
          </ul>
        </div>

        {/* Sección Derecha: Redes Sociales */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-lg mb-4">Síguenos</h4>
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="https://facebook.com/tiendaplaza"
                className="hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/tiendaplaza"
                className="hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tiendaplaza"
                className="hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/tiendaplaza"
                className="hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sección Final: Créditos */}
      <div className="text-center mt-6">
        <p>
          Diseñado por{" "}
          <a
            href="https://nextcode-labs.vercel.app/"
            className="text-blue-300 hover:underline"
          >
            NextCode-Labs
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Ser Regionales. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;
