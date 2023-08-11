import React, { useState } from "react";
import SortTab from "./SortTab";
import CryptoChart from "./CryptoChart";

function CryptoChartView() {
  const [activeTimeframe, setActiveTimeframe] = useState("Week");
  return (
    <>
      <SortTab setActiveTimeframe={setActiveTimeframe} />
      <CryptoChart timeframe={activeTimeframe} />
    </>
  );
}

export default CryptoChartView;
