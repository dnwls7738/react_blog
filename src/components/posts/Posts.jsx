import React from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
    return (
        <section className="blog__posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </section>
    );
}
