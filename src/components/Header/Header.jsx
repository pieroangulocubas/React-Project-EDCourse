import { NavLink } from "react-router-dom"
import "./Header.css"

export function Header(){
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <NavLink to="/" className="logo">CRYPTO DARK</NavLink>
                    <ul className="menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}