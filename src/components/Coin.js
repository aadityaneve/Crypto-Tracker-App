import React from "react";
import "../styles/Coin.css";

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    console.log(name, symbol, price, volume, priceChange, marketcap);
    return (
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coinSymbol">{symbol}</p>
                </div>
                <div className="coinData">
                    <p className="coinPrice">${price}</p>
                    <p className="coinVolume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coinPercent red">
                            {priceChange.toFixed(2)}%
                        </p>
                    ) : (
                        <p className="coinPercent green">
                            {priceChange.toFixed(2)}%
                        </p>
                    )}
                    <p className="coinMarketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;
