import { useRef } from "react"
import "./Crypto.css"
import { FluentDataIcon } from "./FluentDataIcon"
export function Crypto({name,price,explorer,rank,symbol,changePercent24Hr}){
    const ancleRef=useRef()
    const changePercentParsed=parseFloat(changePercent24Hr).toFixed(3)
    const isPercentNegative=changePercent24Hr<0
    return (
    <article className="card" onClick={()=>ancleRef.current.click()}>
        <span className="rank">{rank}</span>
        <div className="textBox">
            <a ref={ancleRef} href={explorer} target="__blank" className="text head">{name}</a>
            <span>{symbol}</span>
            <p className="text price">$ {parseFloat(price).toFixed(3)}</p>
            <p className={`${isPercentNegative ? "negative" : "positive"} change-percent`}>
                <span>
                    {changePercentParsed}% 
                </span>
                <FluentDataIcon className={isPercentNegative ? "down-icon" : ""} />
            </p>
        </div>
    </article>

    )
}

