import React from "react";
import { NavLink } from "react-router-dom";
import "./PersonalStatement.css";

function PersonalStatement() {
    return (
        <div id="personalStatement">
            <h1>Personal Statement</h1>
            <p>I firmly believe that music is meant to enrich our lives in the best way possible. Being a musician has brought so much joy into my life and my goal is to continue to spread that positivity to all those I have the opportunity to meet.</p>
            <NavLink
                activeClassName="active-link"
                className="link"
                to="/bio">Who Is Tyler Bouttavong?
            </NavLink>
        </div>
    );
}

export default PersonalStatement;