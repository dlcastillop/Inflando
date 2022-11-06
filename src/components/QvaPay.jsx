import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";

const QvaPay = (props) => {
  let [data, setData] = useState();
  let [showLoader, setShowLoader] = useState(true);
  let [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch(
      `https://cors-anywhere-1wqi.onrender.com/https://qvapay.com/api/p2p/completed_pairs_average?coin=BANK_${props.coin}`
    )
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
    <section className="flex justify-center">
      {showLoader ? (
        <Loader />
      ) : showError ? (
        <Error />
      ) : (
        <table className="text-lg text-left text-gray-500 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Moneda
              </th>
              <th scope="col" className="py-3 px-6">
                Compra
              </th>
              <th scope="col" className="py-3 px-6">
                Venta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                1 SQP
              </th>
              <td className="py-4 px-6">
                {data.median_buy} {props.coin}
              </td>
              <td className="py-4 px-6">
                {data.median_sell} {props.coin}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default QvaPay;
