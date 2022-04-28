import React from "react";
import "./view.css";

function View() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section id="blog-type" className="center mb100">
                <div className="blog__label">
                    <h3 className="section__title">블로그 제목입니다.</h3>
                    <div>
                        <span className="author">
                            <a href="/">우진</a>
                        </span>
                        <span className="date">2022-04-28</span>
                    </div>
                </div>

                <div className="container">
                    <div className="blog__layout">
                        <div className="blog__left">
                            <h4>안녕하세요</h4>
                            <div></div>
                            <div className="board__btn mt100">
                                <a href="/">삭제하기</a>
                                <a href="/">수정하기</a>
                            </div>
                        </div>
                        <div className="blog__right">
                            <div className="ad">
                                <iframe
                                    src="https://ads-partners.coupang.com/widgets.html?id=572082&template=carousel&trackingCode=AF3320742&subId=&width=300&height=300"
                                    width="300"
                                    height="300"
                                    frameBorder="0"
                                    scrolling="no"
                                    referrerPolicy="unsafe-url"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default View;
