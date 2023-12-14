import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <div id = "subFooter" class = "container">
            <div class = "container_inner">
                <div>
                    <ul>
                        <li>
                            <p>TrendChecker | H.P : 010-2963-7243</p>
                            <p>서울특별시 송파구 충민로 5 B동 822호</p>
                            <p>사업자 등록번호 : 000-0000</p>
                            <p>통신판매업신고 : 0000-xxxx-000000</p>
                            <p>대표 : 심상희 | 개인정보책임자 : Justin Sun</p>
                            <p>이메일 : sanghee_ok@jlabsoft.com</p>
                            <br/>
                            <p>copyright 2023. Trendchecker. All rights reserved.</p>

                        </li>

                        <li className = "social_area">
                            <img src = "/img/insta.png" alt="insta"/>
                            <img src = "/img/fb.png" alt="fb"/>
                            <img src = "/img/nv.png" alt="nv"/>
                        </li>
                        <li>
                            <p>제휴 사이트 문의</p>
                            <p>SafetyInvest 챌린지 문의</p>
                            <p>랜선 대회 문의</p>
                            <p>챌스토어 신규입점 문의</p>
                            <p>챌스토어</p>
                            <p>이용약관</p>
                            <p>개인정보 처리방침</p>

                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;