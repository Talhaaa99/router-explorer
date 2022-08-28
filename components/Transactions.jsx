import { useEffect, useState } from "react";
import axios from "axios";
import TableItem from "./TableItem";

const Transactions = () => {
  const [tableData, setTableData] = useState([]);
  const [searchText, setSearchText] = useState("");
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
            status: stat.transaction_status,
            srcHash: stat.execute_proposal_tx_hash,
            destHash: stat.deposit_tx_hash,
          };
        })
      )
    );
  }, []);

  return (
    <div>
      <div className="w-full text-gray-200 p-4 bg-[#1D191F] opacity-80 rounded-2xl py-8 shadow-xl">
        <div className="flex flex-col md:flex-row text-center py-2 px-8 mr-14 md:text-right ">
          <h1 className="flex pl-10 pb-4 w-full tracking-wide font-bold text-2xl text-white">
            Recent Transactions
          </h1>
          <form className="w-[400px] focus:ring-0 focus:ring-offset-0">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-gray-200 rounded-2xl shadow-xl w-full py-2 px-4 focus:ring-0 focus:ring-offset-0 text-gray-800"
              type="search"
              placeholder="Enter an Address/ Txn Hash"
            />
          </form>
        </div>
        <div className="py-2 pl-20 h-[600px] overflow-scroll scrollbar-hide text-gray-300">
          <table className="w-full h-40 text-start border-collapse  space-x-1 tracking-wider ">
            <thead className="text-start justify-start mb-4">
              <tr className="text-left text-lg font-light content-start ">
                <th className="mb-6">From</th>
                <th className="mb-6">To</th>
                <th className="mb-6">Source </th>
                <th className="mb-6">Destination</th>
                <th className="mb-6">Date</th>
                <th className="mb-6">Status</th>
              </tr>
            </thead>

            <tbody className="border-spacing-y-4">
              {tableData
                .filter((value) => {
                  if (searchText === "") {
                    return value;
                  } else if (
                    value.fromAddress
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    value.toAddress
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item) => (
                  <TableItem key={item.Date} item={item} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Transactions;
