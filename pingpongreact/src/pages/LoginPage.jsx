import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage(){


    const handleClick = (e) => {
        const KakaoLoginAPI = 'http://localhost:8090/oauth2/authorization/kakao';
        window.open(KakaoLoginAPI, "_self");
    };

    return (
        <div id = "header" class = "container">
            <div class = "container_inner">
                <div>
                    <ul>
                        <li class = "header_logo">
                            <img src="./img/tclogo.png" alt="logo" />
                        </li>
                        <li class = "header_title">
                            <p>demo page</p>
                        </li>
                        <li class = "header_login">
                            <img onClick = {handleClick} src="./img/kakao_login.png" alt="kakao" />
                        </li>
                        <li>
                            <button class = "signUpBtn" onClick={()=>window.location.href = '/signUp'}>회원가입</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;