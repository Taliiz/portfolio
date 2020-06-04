import React from "react";

function Introduction() {
    return (
        <div>
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hi, i am <strong>Taliiz</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">
                    aspiring full-stack web dev
                </p>
                <img
                    src={require("./img/taliiz_picture.png")}
                    alt={""}
                    className="intro__img"
                />
            </section>
        </div>
    );
}

export default Introduction;
