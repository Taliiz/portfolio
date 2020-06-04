import React from "react";

function MyServices() {
    return (
        <div>
            <section className="my-services" id="services">
                <h2 className="section__title section__title--services">
                    What I do
                </h2>
                <div className="services">
                    <div className="service">
                        <h3>Making wacky apps</h3>
                        <p>
                            I can make simple react apps like minesweeper or
                            sukodu, low level Express JS understanding but
                            enough to get a website going
                        </p>
                    </div>
                    <div className="service">
                        <h3>Cooking</h3>
                        <p>
                            This has nothing to do with coding or being a dev
                            but I thought it looked better with 2 columns so I
                            put this here, I like cooking and nutrition related
                            topics, if you want a recipe or need help with your
                            diet hmu
                        </p>
                    </div>
                </div>
                <a href="#work" className="btn">
                    My Work
                </a>
            </section>
        </div>
    );
}

export default MyServices;
