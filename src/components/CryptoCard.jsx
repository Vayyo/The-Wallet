import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Container from "./Container";

function CryptoCard({ cryptoIcon, cryptoName, cryptoNameShort }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container className='crypto-card'>
      <div className='flex top-row'>
        <div className='cryptoIcon flex'>{cryptoIcon}</div>
        <div className='nameBox flex'>
          <h3 className='cryptoName'>{cryptoName}</h3>
          <p className='cryptoNameShort'>{cryptoNameShort}</p>
        </div>
      </div>
      <div className='bottomRow flex'>
        <p className='cryptoPrice'>3.529020 {cryptoNameShort}</p>
        <div className='flex currencyPrice'>
          <p>$19.153 USD</p>
          <span className='discount'>- 2.32%</span>
        </div>
      </div>
      <div className='show-more flex'>
        <ShowMore expand={isExpanded ? "show" : ""} />
        <div
          className='show-more-icon flex fade'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
    </Container>
  );
}

function ShowMore({ expand }) {
  return (
    <div className={`buy-sell-btns flex ${expand}`}>
      <button>Buy</button>
      <button>Sell</button>
    </div>
  );
}

export default CryptoCard;
