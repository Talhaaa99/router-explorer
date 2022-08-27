import { useEffect, useState } from "react";
import axios from "axios";
import Transactions from "../components/Transactions";
import TotalStats from "../components/TotalStats";
import Charts from "../components/Charts";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-black via-purple-900 to-black text-white p-10 ">
      <h1>Router Explorer</h1>
      <img
        src="https://explorer.routerprotocol.com/logo.svg"
        className="h-10 w-10"
      ></img>
      <Charts />
      <TotalStats />
      <Transactions />
    </div>
  );
}
