import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <Link to="/view">
                    <img src="https://source.unsplash.com/800x580/?blog,Human" alt="dd" />
                </Link>
            </figure>
            <div className="post__body">
                <span className="post__cate">react</span>
                <div className="post__title">블로그 제목입니다.!</div>
                <div className="post__desc">
                    블로그 설명부분입니다. 블로그 설명부분입니다. 블로그 설명부분입니다. 블로그 설명부분입니다. 블로그
                    설명부분입니다. 블로그 설명부분입니다. 블로그 설명부분입니다. 블로그 설명부분입니다.
                </div>
                <div className="post__info">
                    <span className="author">천우진</span>
                    <span className="date">2022-04-27</span>
                </div>
            </div>
        </article>
    );
}
