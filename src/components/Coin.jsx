const Coin = ({ coin }) => {
  return (
    <div className="coin">
      <img src={coin.image} alt={coin.name} width="30" />
      <h3>{coin.name}</h3>
      <p>₹ {coin.current_price}</p>
      <p
      style={{
        color:
          coin.price_change_percentage_24h > 0 ? "lightgreen" : "red",
      }}
      > 
        {coin.price_change_percentage_24h !== null
          ? `${coin.price_change_percentage_24h.toFixed(2)}%`
          : "N/A"}
               </p>
      <p>Market Cap: ₹ {coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
