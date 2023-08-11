import { FaBitcoinSign } from "react-icons/fa6";

function CryptoPurchase() {
  return (
    <div className='purchase-box flex'>
      <PurchaseButton cryptoIcon={<FaBitcoinSign />} purchaseInfo='Buy BTC' />
      <PurchaseButton cryptoIcon={<FaBitcoinSign />} purchaseInfo='Sell BTC' />
    </div>
  );
}

function PurchaseButton({ cryptoIcon, purchaseInfo }) {
  return (
    <button className='flex'>
      <span className='purchase-icon cryptoIcon flex'>{cryptoIcon}</span>
      <p className='purchase-info'>{purchaseInfo}</p>
    </button>
  );
}

export default CryptoPurchase;
