import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";

const CambioCuba = () => {
  let [data, setData] = useState();
  let [showLoader, setShowLoader] = useState(true);
  let [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch("https://api.cambiocuba.money/api/v2/x-rates")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setShowLoader(false);
      })
      .catch(() => {
        setShowLoader(false);
        setShowError(true);
      });
  }, []);

  return (
    <section className="m-auto">
      {showLoader ? (
        <Loader />
      ) : showError ? (
        <Error />
      ) : (
        <>
          <h2 className="p-5 text-xl font-semibold text-gray-900 bg-white">
            Datos recopilados por{" "}
            <a
              href="https://api.cambiocuba.money/api/v2/x-rates"
              className="font-medium text-blue-600 hover:underline"
              target="_blank"
            >
              CambioCuba
            </a>
          </h2>
          <table className="text-lg text-left text-gray-500 shadow-md">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Moneda
                </th>
                <th scope="col" className="py-3 px-6">
                  Venta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  1 EUR
                </th>
                <td className="py-4 px-6">{data.statistics.ECU.avg} CUP</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  1 USD
                </th>
                <td className="py-4 px-6">{data.statistics.USD.avg} CUP</td>
              </tr>
              <tr className="bg-white border-b">
                <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  1 MLC
                </th>
                <td className="py-4 px-6">{data.statistics.MLC.avg} CUP</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default CambioCuba;