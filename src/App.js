import { useEffect, useState } from "react";
import CoinList from "./components/CoinList.jsx";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="app">
      <h1>Cryptocurrency Price Tracker</h1>
      <input
        type="text"
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <CoinList coins={filteredCoins} />
    </div>
  );
}

export default App;
