import React from "react";

function MyWork() {
    return (
        <div>
            <section className="my-work" id="work">
                <h2 className="section__title section__title--work">My Work</h2>
                <p className="section__subtitle section__subtitle--work">
                    What I've done so far
                </p>
                <div className="portfolio">
                    <a href="#work" className="portfolio__item">
                        <img
                            src={require("./img/minesweeper.PNG")}
                            alt=""
                            className="portfolio__img"
                        />
                    </a>
                    <a href="#work" className="portfolio__item">
                        <img
                            src={require("./img/converter.PNG")}
                            alt=""
                            className="portfolio__img"
                        />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default MyWork;
