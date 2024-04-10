import {useEffect, useState} from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myUSD, setMyUSD] = useState(0);

    const setUSD = (event) => {
        setMyUSD(event.target.value);
    }

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                const sortCoins = json.sort((a,b)=>b.quotes.USD.price - a.quotes.USD.price);
                setCoins(sortCoins);
                setLoading(false);
            })
    }, []);

    return (<div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :
                <div>
                    <input value={myUSD} onChange={setUSD} type="number" placeholder="가진 돈을 입력해"/>
                    <select>
                        {coins.map((coin) => {
                            if (myUSD / coin.quotes.USD.price > 1) {
                                return (<option key={coin.id}>
                                    {coin.name}({Math.round((myUSD / coin.quotes.USD.price)*1000)/1000}개 구매가능)
                                </option>)
                            }
                            return null;
                        })
                        }
                    </select>
                    <ul>
                        {coins.map((coin) => {
                            if (myUSD / coin.quotes.USD.price > 1) {
                                return (<li key={coin.id}>
                                    {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
                                </li>)
                            }
                            return null;
                        })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default CoinTracker;