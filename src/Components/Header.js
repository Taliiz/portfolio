import React from "react";

function Header() {
    function handleBurger(e) {
        e.preventDefault();
        document.body.classList.toggle("nav-open");
    }

    function handleNav() {
        document.body.classList.toggle("nav-open");
    }

    return (
        <div>
            <header>
                <div className="logo">
                    <img src={require("./img/namelogo.png")} alt="" />
                </div>
                <button
                    className="nav-toggle"
                    aria-label="toggle navigation"
                    onClick={(e) => handleBurger(e)}
                >
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item" onClick={handleNav}>
                            <a href="#home" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item" onClick={handleNav}>
                            <a href="#services" className="nav__link">
                                My Services
                            </a>
                        </li>
                        <li className="nav__item" onClick={handleNav}>
                            <a href="#about" className="nav__link">
                                About me
                            </a>
                        </li>
                        <li className="nav__item" onClick={handleNav}>
                            <a href="#work" className="nav__link">
                                My Work
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
