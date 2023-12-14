import React, {useState , useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode";
import TradingViewWidget from '../components/tradingview/TradingViewWidget';
import Profile from '../components/common/profile';

    function User({header,footer}){

        const commonAPI = "http://localhost:8090/api/v1/"


        const jwtToken = Cookies.get("accessTokenCookie");
        const decodedAccToken = jwtDecode(jwtToken);

        let userid = decodedAccToken.userid;


        const getUserInfo = () => {

            
            Axios.get(commonAPI + `user`, {
                headers : {
                    'Authorization' : `Bearer ${jwtToken}`
                }
            }).then((response) => {
                console.log(response);
            })
            .catch(error => console.log("error occured"));

        };

        const getTodaysBest = () => {

            Axios.get(commonAPI + `post`,{
                headers : {
                    'Authorization' : `Bearer ${jwtToken}`
                }
            }).then((response) => {
                console.log(response);
            })
            .catch(error => console.log("error occured"));

        }


        return (
            <>
            {header}
            <div id="challenge" class="container">
                <div class="container_inner">
                    <div>
                        <ul>
                            {/* <Profile/> */}
                        </ul>
                    </div>
                </div>
            </div>
           <TradingViewWidget/>

            <div>
                <button onClick={getUserInfo}></button>
            </div>
            {footer}
            </>
        )
    }

    export default User;
