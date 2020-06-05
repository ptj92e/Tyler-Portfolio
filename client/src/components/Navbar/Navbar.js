import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav>
                <div id="title">
                    <h2>Tyler Bouttavong</h2>
                    <button type="button" uk-toggle="target: #offcanvas-nav" className="uk-navbar-toggle uk-hidden@s"><i className="fas fa-bars fa-2x"></i></button>
                </div>
                <div id="navLinks">
                    <ul className="uk-visible@s">
                        <li>
                            <NavLink
                                exact={true}
                                activeClassName="active-link"
                                className="link"
                                to="/">Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active-link"
                                className="link"
                                to="/bio">Bio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active-link"
                                className="link"
                                to="/media">Media
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active-link"
                                className="link"
                                to="/social">Social
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active-link"
                                className="link"
                                to="/inquires">Inquires
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div id="offcanvas-nav" uk-offcanvas="true">
                    <div className="uk-offcanvas-bar">
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                        <ul id="offCanvasNav">
                            <li>
                                <NavLink
                                    exact={true}
                                    activeClassName="active-link"
                                    className="link"
                                    to="/">Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    className="link"
                                    to="/bio">Bio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    className="link"
                                    to="/media">Media
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    className="link"
                                    to="/social">Social
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active-link"
                                    className="link"
                                    to="/inquires">Inquires
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;