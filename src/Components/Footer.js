import React from "react";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <a href="mailto:ghtooma@gmail.com" className="footer__link">
                    ghtooma@gmail.com
                </a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a
                            className="social-list__link"
                            href="https://github.com/Taliiz"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
