import '../assets/styles/header.css';

import { Outlet, Link } from "react-router-dom"

function Header() {

    return(

        <div>

            <nav className="navbar">
                <div className="inner-width">
                    <a href="/" className="logo"></a>

                    <button className="menu-toggler"></button>

                    <div className="navbar-menu">
                        <Link to="/">Home</Link>
                        <Link to="#">Login</Link>

                    </div>

                </div>

            </nav> <Outlet/>

        </div>

    )

}

export default Header;