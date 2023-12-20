import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import $ from "jquery";
import Axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import Profile from '../components/common/profile';
import { getTodaysTime,parseTimeDataToYYMMDD } from '../global/TimeParser';
import TradingViewNewsWidget from '../components/tradingview/TradingViewNewsWidget';
import TradingViewWidgetWhole from '../components/tradingview/TradingViewWidgetWhole';

    function Main({header, footer}){

        const commonAPI = "http://localhost:8090/api/v1/"
        const [wholeUserInfos, setUserWholeInfos] = useState([]);
        const [topFiveStrategyInfos, setStgyInfos] = useState([]);

        const jwtToken = Cookies.get("accessTokenCookie");
        const navigate = useNavigate();
     

        

        const getMainData = () => {
            Axios.get(commonAPI + `strategy/rank` , {
                headers : {
                    'Authorization' : `Bearer ${jwtToken}`
                }
            }).then((response) => {
                if(response.data.data == null){
                    setStgyInfos([]);

                }
                else
                {
                setStgyInfos(response.data.data);
                console.log(response.data.data);
                }
            })
            .catch(error => console.log("error occured"));
        }

        useEffect(() => {
            getMainData();
        }, []);

        return(
        <>  
            {header}
            <div>
                <div class="trendchecker-app">
                    <main class="main">
                    <nav class="nav">
                        <ul class="tabs">
                            <li>
                            <Profile/>

                            </li>
                            <br />
                            <li class="tab">
                                <button class="tab-btn tab-btn--active">
                                    <i class="ph-lightbulb-bold"></i>
                                    <span class="tab-btn-title">Overview</span>
                                </button>
                            </li>
                            <li class="tab">
                                <button class="tab-btn">
                                    <i class="ph-arrows-left-right-bold"></i>
                                    <span class="tab-btn-title">Transactions</span>
                                </button>
                            </li>
                            <li class="tab">
                                <button class="tab-btn">
                                    <i class="ph-credit-card-bold"></i>
                                    <span class="tab-btn-title">Bugdets</span>
                                </button>
                            </li>
                            <li class="tab">
                                <button class="tab-btn">
                                    <i class="ph-arrows-counter-clockwise-bold"></i>
                                    <span class="tab-btn-title">Subscriptions</span>
                                </button>
                            </li>
                            <li class="tab">
                                <button class="tab-btn">
                                    <i class="ph-bank-bold"></i>
                                    <span class="tab-btn-title">Accounts</span>
                                </button>
                            </li>
                            <div className='wdgtSizing'>
                            <li class = "tab">
                                <TradingViewWidgetWhole/>
                            </li>
                            </div>
                            <div className='wdgtSizing'>
                            <li class="tab">
                                <TradingViewNewsWidget/>
                            </li>
                            </div>
                        </ul>
                    </nav>
                    <div class="content">
                        <div class="content-body">
                            <section class="overview">
                                <header class="overview-header">
                                    <h2 class="overview-header-title"></h2>
                                    <a href="#" class="link">View all</a>
                                </header>
                                <div class="overview-body">
                                    <div class="summary">
                                        <h3 class="summary-date">{getTodaysTime()}</h3>
                                        <span class="summary-amount">X10</span>
                                    </div>
                                    {topFiveStrategyInfos.map((strategyData, index) => (
                                    <div class="list">
                                        <div class="list-item">
                                            <div class="list-item-company">
                                                <figure class="list-item-company-logo">
                                                    <img src={strategyData.asset.thumbnailUrl} />
                                                </figure>
                                                <div class="list-item-company-info">
                                                    <h4 class="list-item-company-name">{strategyData.title}</h4>
                                                    <a href="#" class="list-item-company-hashtag">{strategyData.content}</a>
                                                </div>
                                            </div>
                                            <div class="list-item-transaction">
                                                <div class="list-item-transaction-values">
                                                    <span class="list-item-transaction-value">
                                                        <i class="ph-arrows-clockwise-bold"></i>{strategyData.calculatedYield}%									</span>
                                                    <time class="list-item-transaction-time" datetime="17:00">{parseTimeDataToYYMMDD(strategyData.createdAt)}</time>
                                                </div>
                                                <button class="list-item-transaction-action">
                                                    <i class="ph-caret-down-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                <footer class="overview-footer">
                                    <a href="#" class="link">View all transactions<i class="ph-arrow-right-bold"></i></a>
                                </footer>
                            </section>
                            <section class="overview">
                                <header class="overview-header">
                                    <h2 class="overview-header-title">Top Analysis<span>5</span></h2>
                                    <a href="#" class="link">View all Technical Analysis</a>
                                </header>
                                <div class="overview-body">
                                    <div class="list">
                                        <div class="list-item">
                                            <div class="list-item-company">
                                                <figure class="list-item-company-logo list-item-company-logo--square">
                                                    <img src="https://assets.codepen.io/285131/netflix-logo.png" />
                                                </figure>
                                                <div class="list-item-company-info">
                                                    <h4 class="list-item-company-name">Netflix</h4>
                                                    <a href="#" class="list-item-company-hashtag">#Entertainment</a>
                                                </div>
                                            </div>
                                            <div class="list-item-transaction">
                                                <div class="list-item-transaction-values">
                                                    <span class="list-item-transaction-value">
                                                        <i class="ph-arrows-clockwise-bold"></i>-$7.99
                                                    </span>
                                                    <time class="list-item-transaction-time" datetime="2020-09-23T16:00:00">September 23, 2020 at 4:00pm</time>
                                                </div>
                                                <button class="list-item-transaction-action">
                                                    <i class="ph-caret-down-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="list-item-company">
                                                <figure class="list-item-company-logo list-item-company-logo--square">
                                                    <img src="https://assets.codepen.io/285131/apple-music.png" />
                                                </figure>
                                                <div class="list-item-company-info">
                                                    <h4 class="list-item-company-name">Apple Music</h4>
                                                    <a href="#" class="list-item-company-hashtag">#Music</a>
                                                </div>
                                            </div>
                                            <div class="list-item-transaction">
                                                <div class="list-item-transaction-values">
                                                    <span class="list-item-transaction-value"><i class="ph-arrows-clockwise-bold"></i> -$9.99
                                                    </span>
                                                    <time class="list-item-transaction-time" datetime="2020-09-26T17:00:00">September 26, 2020 at 5:00pm</time>
                                                </div>
                                                <button class="list-item-transaction-action">
                                                    <i class="ph-caret-down-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="list-item">
                                            <div class="list-item-company">
                                                <figure class="list-item-company-logo list-item-company-logo--square">
                                                    <img src="https://assets.codepen.io/285131/aws-logo.png" />
                                                </figure>
                                                <div class="list-item-company-info">
                                                    <h4 class="list-item-company-name">Amazon AWS</h4>
                                                    <a href="#" class="list-item-company-hashtag">#Hosting</a>
                                                </div>
                                            </div>
                                            <div class="list-item-transaction">
                                                <div class="list-item-transaction-values">
                                                    <span class="list-item-transaction-value"><i class="ph-arrows-clockwise-bold"></i> -$180.50
                                                    </span>
                                                    <time class="list-item-transaction-time" datetime="2020-09-27T21:00:00">September 27, 2020 at 9:00pm</time>
                                                </div>
                                                <button class="list-item-transaction-action">
                                                    <i class="ph-caret-down-bold"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer class="overview-footer">
                                    <a href="#" class="link">View all upcoming payments<i class="ph-arrow-right-bold"></i></a>
                                </footer>
                            </section>
                            <section class="overview">
                                <header class="overview-header">
                                    <h2 class="overview-header-title">경제 캘린더<span></span></h2>
                                    <a href="#" class="link">View all</a>
                                </header>
                                <div class="overview-body">
                                    <div class="list">
                                        <div class="list-item">
                                        <iframe
                                            src="https://sslecal2.investing.com?ecoDayBackground=%23ffffff&innerBorderColor=%23000000&ecoDayFontColor=%23000000&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone,timeselector,filters&countries=17,5,12,4,72,14,35,37,122,22,11,25&calType=day&timeZone=88&lang=18"
                                            width="100%"
                                            height="800px"
                                            frameBorder="0"
                                            allowTransparency="true"
                                            marginWidth="0"
                                            marginHeight="0"
                                            />

                                            <div className="poweredBy" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                                            <span style={{ fontSize: "11px", color: "#333333", textDecoration: "none" }}>
                                                외환 포털{" "}
                                                <a
                                                href="https://kr.Investing.com/"
                                                rel="nofollow"
                                                target="_blank"
                                                style={{ fontSize: "11px", color: "#06529D", fontWeight: "bold" }}
                                                className="underline_link"
                                                >
                                                Investing.com 한국어
                                                </a>
                                                .
                                            </span>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <footer class="overview-footer">
                                    <a href="https://kr.Investing.com/" class="link">View all upcoming Financial Events<i class="ph-arrow-right-bold"></i></a>
                                </footer>
                            </section>
                        </div>
                    </div>
                    </main>
                </div>
            </div>
            {footer}

        </>)
    }
    export default Main;