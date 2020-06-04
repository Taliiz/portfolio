import React from "react";

function AboutMe() {
    return (
        <div>
            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">
                    Who I am
                </h2>
                <p className="section__subtitle section__subtitle--about">
                    Self taught aspiring full-stack React dev
                </p>

                <div className="about-me__body">
                    <p>
                        I'm Tom, I'm learning web development to seek a career
                        in it eventually, I made a few basic apps so far and did
                        some backend stuff too to learn to become fullstack
                        webdev eventually
                    </p>
                </div>
                <img
                    src={require("./img/yep.png")}
                    alt=""
                    className="about-me__img"
                />
            </section>
        </div>
    );
}

export default AboutMe;
