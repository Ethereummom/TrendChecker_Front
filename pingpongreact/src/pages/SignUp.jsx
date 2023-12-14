import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import $ from "jquery";
import Axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

function SignUp(props){

    // const jwtToken = Cookies.get("accessTokenCookie");
    // const refreshToken = Cookies.get("refreshTokenCookie");

    // const decodedAccToken = jwtDecode(jwtToken);

    // let userid = decodedAccToken.userId;
    // let userRole = decodedAccToken.role;
    // let profile_image = decodedAccToken.profile_image;


    // const addUser = () =>{
    //     let nickname = $("input[name = nickname]").val();
    //     let intro = $("input[name = intro]").val();


    //     Axios.post("/api/v1/user",
    //     {
    //         nickname : nickname,
    //         intro : intro,

    //     },{
    //         headers : {
    //             Authorization : `Bearer ${jwtToken}`
    //         }
    //     }
    //     )
    //     .then(response => {
    //         console.log(response);
    //     })
    // }

    useEffect(() => {
        function updateSubFooterPosition(){
            var subFooter = $('#subFooter');
            if($(window).scrollTop() + $(window).height() >= $(document).height()){
                subFooter.css('position' , 'fixed');
            }else{
                subFooter.css('position', 'sticky');
            }
        }

        updateSubFooterPosition();
    }, []);
    return(
        // <>
        // {props.header}{

        // }
        <div className="page">
        <div className="page_container">
            <div className="left">
            <div className="login">Sign Up</div>
            <div className="eula">WELCOME TO TRENDCHECKER</div>
            </div>
            <div className="right">
            <div className="form">
                

                <label htmlFor="signName">닉네임</label>
                <input type="name" id="signName" name="u_nickname" />
                <label htmlFor="signContent">소개</label>
                <input type="text" id="signContent" name="u_content" />
                <input type="submit" onClick="" id="submit" value="Submit" />
            </div>
            </div>
        </div>
    </div>
    // {props.footer}
    // </>

    )

}

export default SignUp;