import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const TableItem = ({ item }) => {
  const [tokenAPI, setTokenAPI] = useState([]);
  const tokenUrl = "https://bridge.arbitrum.io/token-list-42161.json";
  const [showModal, setShowModal] = useState(false);

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
      <td className="py-4 mt-4">{new Date(item?.date).toLocaleDateString()}</td>
      <td>
        <button class="btn btn-success bg-[#29e3c1] rounded-full py-4 mt-4">
          {item?.status}
        </button>
      </td>
    </tr>
  );
};
export default TableItem;
