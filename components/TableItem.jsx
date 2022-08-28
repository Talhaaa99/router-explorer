import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const TableItem = ({ item }) => {
  const [tokenAPI, setTokenAPI] = useState([]);
  const tokenUrl = "https://bridge.arbitrum.io/token-list-42161.json";
  const [showModal, setShowModal] = useState(false);

  console.log(item);

  useEffect(() => {
    axios.get(tokenUrl).then((res) => {
      setTokenAPI(res.data.tokens);
    });
  }, [tokenAPI]);

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <>
      {showModal ? (
        <div className="bg-[#1D191F]">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#1D191F]">
            <div className="relative w-auto my-6 mx-auto max-w-6xl max-h-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#1D191F] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Transaction Details
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="h-[700px] w-[700px] p-6 flex-col justify-between space-x-2 bg-[#1D191F]">
                  <div className="flex-col gap-y-3 text-xl">
                    <p className="flex justify-between py-3">
                      Date<p>{item.date}</p>
                    </p>

                    <p className="flex justify-between py-3">
                      From Address<p>{truncateString(item.fromAddress, 20)}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      To Address<p>{truncateString(item.toAddress, 20)}</p>
                    </p>

                    <p className="flex justify-between py-3">
                      Source Token<p>{item.srcToken}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      Amount <p>{item.amount}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      Destination Chain<p>{item.destinationChain}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      Fee<p>{item.fee}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      Source Hash<p>{truncateString(item.srcHash, 20)}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      Destination Hash<p>{truncateString(item.destHash, 20)}</p>
                    </p>
                    <p className="flex justify-between py-3">
                      Status<p>{item.status}</p>
                    </p>
                  </div>
                  <div className="flex-row"></div>
                </div>
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <tr
          className="text-left hover:cursor-pointer hover:opacity-80"
          onClick={() => setShowModal(true)}
        >
          <td className="py-4 mt-4">
            <div className="flex gap-2">
              <img src={tokenAPI[0]?.logoURI}></img>
              {truncateString(item.fromAddress, 20)}
            </div>
          </td>
          <td className="py-4 mt-4">
            <div className="flex gap-2">
              <img src={tokenAPI[3]?.logoURI}></img>
              {truncateString(item.toAddress, 20)}
            </div>
          </td>

          <td className="py-4 mt-4">
            <div className="flex gap-2 align-center">
              <img src={tokenAPI[32]?.logoURI}></img>
              {item?.srcSymbol}
            </div>
          </td>
          <td className="py-4 mt-4">
            <div className="flex gap-2 align-center">
              <img src={tokenAPI[20]?.logoURI}></img>
              {item?.destSymbol}
            </div>
          </td>
          <td className="py-4 mt-4">
            {new Date(item?.date).toLocaleDateString()}
          </td>
          <td>
            <button className="btn btn-success bg-[#29e3c1] rounded-full py-4 mt-4">
              {item?.status}
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
