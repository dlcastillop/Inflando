import React from "react";
import Toque from "./components/Toque";
import QvaPay from "./components/QvaPay";
import CambioCubaDivisas from "./components/CambioCubaDivisas";
import CambioCubaCrypto from "./components/CambioCubaCrypto";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="my-4 text-2xl font-bold tracking-tight leading-none text-black md:text-3xl lg:text-4xl text-center">
        Tasa de cambio informal de divisas en Cuba
      </h1>

      <h2 className="my-4 text-xl font-bold tracking-tight leading-none text-black md:text-2xl lg:text-3xl text-center">
        Divisas
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        <Toque />
        <CambioCubaDivisas />
      </div>

      <h2 className="my-4 text-xl font-bold tracking-tight leading-none text-black md:text-2xl lg:text-3xl text-center">
        Criptomonedas
      </h2>
      <div className="grid grid-cols-1 gap-5 justify-center">
        <CambioCubaCrypto />
      </div>

      <h2 className="my-4 text-xl font-bold tracking-tight leading-none text-black md:text-2xl lg:text-3xl text-center">
        Saldo QvaPay
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        <QvaPay coin="CUP" />
        <QvaPay coin="MLC" />
      </div>

      <Footer />
    </>
  );
};

export default App;
