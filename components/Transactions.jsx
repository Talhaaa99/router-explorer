import { useEffect, useState } from "react";
import axios from "axios";
import TableItem from "./TableItem";

const Transactions = () => {
  const [tableData, setTableData] = useState([]);
  const STATS_URL =
    "https://api.stats.routerprotocol.com/api/deposits?networkId=43114,56,137,10,42161,250,1,1666600000,25,2222,1313161554&limit=100&orderBy=desc&page=1";

  useEffect(() => {
    axios.get(STATS_URL).then((res) =>
      setTableData(
        res.data.data?.map((stat) => {
          return {
            date: stat.created_date,
            fromHash: stat.deposit_tx_hash,
            fromAddress: stat.depositor_address,
            destinationChain: stat.dest_chain_id,
            toAddress: stat.dest_token_address,
            amount: stat.dest_token_amount,
            destAddress: stat.destination_receipient_address,
            destSymbol: stat.destinationtokensymbol,
            fee: stat.fee,
            feeSymbol: stat.feetokensymbol,
            srcToken: stat.src_token_amount,
            srcSymbol: stat.srctokensymbol,
          };
        })
      )
    );
  }, []);

  return (
    <div className="w-full text-white p-4 bg-black rounded-lg shadow-xl">
      <h1 className="pl-14 font-bold tracking-wide text-2xl">
        Recent Transactions
      </h1>
      <div className="py-2 px-14">
        <table className="w-full h-full text-center border-collapse space-x-2">
          <thead>
            <tr className="border-b">
              <th></th>
              <th className="">From/To</th>
              <th></th>
              <th>Source </th>
              <th>Destination</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="font">
            {tableData.map((item) => (
              <TableItem item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transactions;
