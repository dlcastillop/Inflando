import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-2">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex sm:flex-row sm:justify-between sm:items-start items-center flex-col">
        <span className="block text-sm text-gray-500">
          De{" "}
          <a
            href="https://danielcastillop.netlify.app/"
            className="hover:underline text-blue-600"
            target="_blank"
          >
            Daniel Castillo
          </a>{" "}
          con ❤ para Cuba
        </span>
        <ul className="flex flex-wrap items-center mb-6 sm:mt-0 mt-2 text-sm text-gray-500">
          <li>
            <a
              href="https://eltoque.com/tasas-de-cambio-de-moneda-en-cuba-hoy"
              className="mr-4 hover:underline md:mr-6 text-blue-600"
              target="_blank"
            >
              elTOQUE
            </a>
          </li>
          <li>
            <a
              href="https://qvapay.com/p2p"
              className="mr-4 hover:underline md:mr-6 text-blue-600"
              target="_blank"
            >
              QvaPay
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
