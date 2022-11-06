import React from "react";
import Toque from "./components/Toque";
import QvaPay from "./components/QvaPay";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="my-4 text-2xl font-bold tracking-tight leading-none text-black md:text-3xl lg:text-4xl text-center">
        Tasa de cambio informal de divisas en Cuba
      </h1>

      <h2 className="p-5 text-xl font-semibold text-center text-gray-900 bg-white">
        Datos recopilados por{" "}
        <a
          href="https://eltoque.com/tasas-de-cambio-de-moneda-en-cuba-hoy"
          className="font-medium text-blue-600 hover:underline"
          target="_blank"
        >
          elTOQUE
        </a>
      </h2>
      <div className="grid grid-cols-1 gap-5 justify-center">
        <Toque />
      </div>
      <h2 className="p-5 text-xl font-semibold text-center text-gray-900 bg-white">
        Datos recopilados de la red P2P de{" "}
        <a
          href="https://qvapay.com/p2p"
          className="font-medium text-blue-600 hover:underline"
          target="_blank"
        >
          QvaPay
        </a>
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        <QvaPay coin="CUP" />
        <QvaPay coin="MLC" />
      </div>

      <footer className="text-md text-center text-gray-900 mt-10">
        De{" "}
        <a
          href="https://danielcastillop.netlify.app/"
          className="font-medium text-blue-600 hover:underline"
          target="_blank"
        >
          Daniel Castillo
        </a>{" "}
        con ❤ para Cuba
      </footer>
    </>
  );
};

export default App;
