import Coin from "./Coin";

const CoinList = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </>
  );
};

export default CoinList;
