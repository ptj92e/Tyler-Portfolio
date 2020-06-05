import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Bio from "../pages/Bio";
import Home from "../pages/Home";
import Inquires from "../pages/Inquires";
import Media from "../pages/Media";
import Social from "../pages/Social";

function Portfolio() {
    return (
        <div className="portfolio">
            <Router>
                <Navbar />
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/inquires" component={Inquires} />
                    <Route exact path="/media" component={Media} />
                    <Route exact path="/social" component={Social} />
                </div>
            </Router>
        </div>
    );
};

export default Portfolio;