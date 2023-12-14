import React, { useEffect , useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import Axios from "axios";

export default function Profile(){
    const location = useLocation();
    const shouldRenderHotChart = location.pathname === "/board";
    const shouldRenderAssetChart = location.pathname === "/asset";

    const [userInfo, setUserInfo] = useState({
        userid : "",
        role : "",
        profile_image : ""
    });

    const [profile_image, setProfile_image] = useState("");
    
    useEffect(() => {
        const jwtToken = Cookies.get("accessTokenCookie");
        if(jwtToken){
            
        const decodedAccToken = jwtDecode(jwtToken);
        const userInfoCookie = Cookies.get('userInfo');

        if(decodedAccToken && userInfo.userid === ""){
            setUserInfo({ 
                userid : decodedAccToken.userid || "",
                role : decodedAccToken.role || "",
                profile_image : decodedAccToken.profile_image || ""
                }, []);
        }else {
            }
        }
    })

    return(
        <div class = "real-profile">
             <h1 class="title-pen"> 접속 유저 <span>정보</span></h1>
            <div class="user-profile">
                <img class="avatar" src={userInfo.profile_image} alt="Ash" />
                <div class="username">{userInfo.userid}</div>
            <div class="bio">
                왕초보 UI Designer
            </div>
                <div class="description">
                I use to design websites and applications
                for the web.
            </div>
            <ul class="data">
                <li>
                <span class="entypo-heart"> 127</span>
                </li>
                <li>
                <span class="entypo-eye"> 853</span>
                </li>
                <li>
                <span class="entypo-user"> 311</span>
                </li>
                <li>
                <span class="entypo-user"> 311</span>
                </li>
                <li>
                <span class="entypo-user"> 311</span>
                </li>
            </ul>
            </div>
            <div class = "profile-footer">
                <h1>inspired by 
            <a href={"https://dribbble.com/shots/1033074-User-Profile"}>
            <span class="entypo-dribbble"></span> shot</a>
                </h1>
            </div>



        </div>
       

    )



}