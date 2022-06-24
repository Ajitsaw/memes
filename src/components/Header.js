import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setDark } from "../features/dark";

export default function Header(props) {
    const dispatch = useDispatch();
    const darkmode = useSelector(state => state.darkState.value);
    return (
        <header className={darkmode ? "dark" : ""}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-6">
                        <div className="header-left">
                            <Link to="/" className="logo">
                                <svg width="30" height="32" viewBox="0 0 60 64" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient x1="0" x2="0" y1="0" y2="1" id="hLogoGradient">
                                            <stop offset="0" stopColor="#3291FF"></stop> <stop offset="1" stopColor="#00D48E"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#hLogoGradient)" d="M49.84 25.168A98.797 98.797 0 0033 12.952c-6.14-3.542-12.5-6.38-19-8.48-3.1-1.04-6.24-1.88-9.38-2.58-.98 3.078-1.8 6.22-2.46 9.418A99.238 99.238 0 000 31.988c0 7.102.74 14.02 2.16 20.704.66 3.2 1.48 6.34 2.458 9.418 3.14-.7 6.282-1.54 9.38-2.578a98.014 98.014 0 0019-8.48 98.826 98.826 0 0016.84-12.222 92.443 92.443 0 006.92-6.82 88.991 88.991 0 00-6.918-6.842zM14 45.852V18.15l24 13.858-24 13.844z"></path>
                                </svg>
                                Generito
                            </Link>
                            <div className={darkmode ? "DarkModeToggle active" : "DarkModeToggle"} onClick={() => dispatch(setDark(!darkmode))}></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-right">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/about" activeclassname="active">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/resources" activeclassname="active">Resources</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <div className="button">Contact</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}