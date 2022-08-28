import axios from "axios";
import { useEffect, useState } from "react";

const TotalStats = () => {
  const [metadata, setMetadata] = useState([]);

  const META_URL =
    "https://api.stats.routerprotocol.com/api/deposits/getMetaData";

  useEffect(() => {
    axios.get(META_URL).then((res) => {
      setMetadata(
        res.data.map((item) => {
          return {
            value: item.value,
            label: item.label,
          };
        })
      );
    });
  }, []);

  console.log(metadata);

  return (
    <div className="text-white w-full h-[100px] flex items-center opacity-80 rounded-2xl justify-between px-12 my-4 bg-[#1D191F]">
      {metadata?.map((stats) => {
        return (
          <div
            key={stats.index}
            className="flex-row align-center justify-center tracking-widest"
          >
            <h1 className="font-extralight text-gray-300 ">{stats.label}</h1>
            <h3 className="flex justify-center text-2xl">{stats.value}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default TotalStats;
