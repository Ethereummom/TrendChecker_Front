import React, { useEffect , useState } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import $ from 'jquery';
import {jwtDecode} from 'jwt-decode';
import Axios from 'axios';
import TradingViewWidgetTicker from '../tradingview/TradingViewWidgetTicker';

function Header(){
    const [userInfo, setUserInfo] = useState({
        userid : "",
        nickname : "",
        profileImage : ""

    });

    const jwtToken = Cookies.get("accessTokenCookie");
    const refreshToken = Cookies.get("refreshTokenCookie");
    const decodedAccToken = jwtDecode(jwtToken);

    let userid = decodedAccToken.userid;


    return (
        <div id="subHeader" class="container">
            <div class="container_inner">
                <div>
                    <ul>
                        <Link to="/assets">
                            <li class="sub_logo">
                                {/* <p>TrendChecker</p> */}
                                <img src="/img/tclogo.png" alt="logo" />
                            </li>
                        </Link>
                        <li class="menuArea">
                            <ul class="mainMenu">
                                <li>
                                    <Link to="/main">홈</Link>
                                </li>
                                <li>
                                    <Link to="/assetlist">자산</Link>
                                    <ul class="subMenu">
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/post">게시판</Link>

                                </li>
                                <li>
                                    <Link to="/service">서비스 소개</Link>
                                </li>
                                <li>
                                    <Link to="/profile">마이페이지</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="sub_burger">
                            <button onClick="">Market Analysis Data</button>
                        </li>
                    </ul>
                </div>
            </div>
            <TradingViewWidgetTicker/>
        </div>
    )
}

export default Header;