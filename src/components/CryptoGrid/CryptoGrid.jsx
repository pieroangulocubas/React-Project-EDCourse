import "./CryptoGrid.css"
import {Crypto} from '../Crypto/Crypto'
export function CryptoGrid({cryptos}){
    return (
        <section className="crypto-grid">
            {
                cryptos.map(({id,name,priceUsd,explorer,rank,symbol,changePercent24Hr})=>{
                    return (
                        <Crypto key={id} name={name} price={priceUsd} rank={rank} explorer={explorer} symbol={symbol} changePercent24Hr={changePercent24Hr}/>
                    )
                })
            }
        </section>
    )
}   