import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./components/Coin.js";

function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => {
                setCoins(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="coinApp">
            <div className="coinSearch">
                <h1 className="coinText">Search a currency</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        className="coinInput"
                        onChange={handleChange}
                    />
                </form>
            </div>
            {filteredCoins.map((coin) => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        volume={coin.total_volume}
                        priceChange={coin.price_change_percentage_24h}
                        marketcap={coin.market_cap}
                    />
                );
            })}
        </div>
    );
}

export default App;
