import EarthAmericasSVG from "./icons/EarthAmericasSVG" 

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav--logo">
                <EarthAmericasSVG />
                <h1 className="nav--text">my travel journal.</h1>
            </div>
        </nav>
    )
}