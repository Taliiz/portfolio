import React from "react";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import MyServices from "./Components/MyServices";
import AboutMe from "./Components/AboutMe";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <MyServices />
            <AboutMe />
            <MyWork />
            <Footer />
        </div>
    );
}

export default App;
