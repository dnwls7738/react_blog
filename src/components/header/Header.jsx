import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="/">
                    REACT <em>Blog</em>
                </a>
            </h1>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/view">POST</Link>
                    </li>
                    <li>
                        <Link to="/join">JOIN</Link>
                    </li>
                    <li>
                        <Link to="/write">WRITE</Link>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <Link to="/mypage">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="text">우진님 안녕하세요</div>
                </Link>
            </div>
        </header>
    );
}
