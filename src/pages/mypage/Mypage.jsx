import React from 'react'
import "./mypage.css"

function Mypage() {
  return (
    <main id="contents">
        <h2 class="ir_so">컨텐츠 영역</h2>
        <section class="join-type gray">
            <div class="member-form">
                <h3>회원 정보</h3>
                <div class="join-intro">
                    <div class="face"><img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="기본이미지" /></div>
                    <div class='intro'>자기소개:</div>
                </div>
                <div class="join-info">
                    <ul>
                        <li><strong>이메일</strong><span>dnwls7738@naver.com</span></li>
                        <li><strong>닉네임</strong><span>초짜코딩</span></li>
                        <li><strong>이름</strong><span>천우진</span></li>
                        <li><strong>생일</strong><span>1996.03.24</span></li>
                        <li><strong>번호</strong><span>000-0000-0000</span></li>
                        <li><strong>성별</strong><span>남</span></li>
                        <li><strong>사이트</strong><span></span></li>
                    </ul>
                </div>
                <div class="join-btn">
                    <a href="mypageModify.php">수정하기</a>
                    <a href="mypageRemove.php" onclick="return noticeRemove();">탈퇴하기</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Mypage
