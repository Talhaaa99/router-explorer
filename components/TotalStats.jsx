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
    <div className="text-white w-full h-[70px] flex items-center justify-between px-12 py-4 bg-black">
      {metadata?.map((stats) => {
        return (
          <div key={stats.index} className="items-center justify-center">
            <h1>{stats.label}</h1>
            <h3>{stats.value}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default TotalStats;
