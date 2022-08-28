import { useEffect, useState } from "react";
import axios from "axios";
import Transactions from "../components/Transactions";
import TotalStats from "../components/TotalStats";
import Charts from "../components/Charts";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-t from-[#1F2129] via-[#6B1644] to-[#1F2129] text-white p-10 ">
      <Header />
      <Charts />
      <TotalStats />
      <Transactions />
    </div>
  );
}
