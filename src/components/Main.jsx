import React from "react";
import CryptoCard from "./CryptoCard";
import CryptoChartView from "./CryptoChartView";
import CryptoPurchase from "./CryptoPurchase";
import { FaBitcoinSign } from "react-icons/fa6";

function Main() {
  return (
    <main>
      <CryptoCard
        cryptoIcon={<FaBitcoinSign />}
        cryptoName='Bitcoin'
        cryptoNameShort='BTC'
      />
      <CryptoChartView />
      <CryptoPurchase />
    </main>
  );
}

export default Main;
