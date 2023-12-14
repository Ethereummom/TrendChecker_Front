import React, {useState , useEffect , useRef } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Profile from '../../components/common/profile';
import { calculateTimeDifferenceByDate, parseTimeDataToYYMMDD } from '../../global/TimeParser';
import { parse } from 'date-fns';
import LinePlot from '../../components/assets/D3Graph';

    function Asset({header, footer}){

        const jwtToken = Cookies.get("accessTokenCookie");
        const decodedAccToken = jwtDecode(jwtToken);
        const commonAPI = "http://localhost:8090/api/v1/"
        const [record , setRecord] = useState({
            recordseq : "",
            startprice : "",
            currentprice : "",
            percentage : "",
            user : [],
            asset : [],
            createdAt : "",
            finishedAt : ""
        });

        const [strategyInfos, setStgyInfos] = useState({

        });

        const [benefit , setBenefit] = useState({

            mypercentage : "",
            otherspercentageavg: "",
            kospimarketavg : "",
            nasdaqmarketavg : "",
            bitcoinmarketavg : ""

        });


        const {recordseq} = useParams();


        const getUserAssetDetail = (recordseq) => {
            Axios.get(commonAPI + `record/` + recordseq , {
                headers : {
                    'Authorization' : `Bearer ${jwtToken}`
                }
            }).then((response) => {
                if(response != null){
                    setRecord(response.data.data);
                    console.log(record);
                }else{
                    console.log("데이터가 없음요");
                }
                console.log(response);
            })
            .catch(error => console.log("error occured"));
        };

        const getMainData = () => {
            Axios.get(commonAPI + `strategy/rank` , {
                headers : {
                    'Authorization' : `Bearer ${jwtToken}`
                }
            }).then((response) => {
                setStgyInfos(response.data.data);
                console.log(response.data.data);
            })
            .catch(error => console.log("error occured"));
        }

        useEffect(() => {
            getUserAssetDetail(recordseq);
        } , []);
        

        return (
            <>
            {header}
            
            <div className = 'asset-global'>
            <div className = 'dashboard-all'>
            <Profile/>
            <div className = 'profile-left-side'>
                <h1>DashBoard</h1>
            <div id="live-poll-area">
            <div id="bar-chart">
                <div class="graph">
                    <ul class="x-axis">
                    <li><span>2010</span></li>
                    <li><span>2012</span></li>
                    <li><span>2013</span></li>
                    <li><span>2014</span></li>
                    <li><span>2015</span></li>
                    </ul>
                    <ul class="y-axis">
                    <li><span>100</span></li>
                    <li><span>75</span></li>
                    <li><span>50</span></li>
                    <li><span>25</span></li>
                    <li><span>0</span></li>
                    </ul>
                    <div class="bars">
                    <div class="bar-group">
                        <div class="bar bar-1 stat-1" style={{height: '78%'}}>      
                        <span>4080</span>
                        </div>
                        <div class="bar bar-2 stat-2"style={{height: '78%'}}>
                        <span>5680</span>
                        </div>
                        <div class="bar bar-3 stat-3"style={{height: '78%'}}>
                        <span>1040</span>
                        </div>
                    </div>
                    <div class="bar-group">
                        <div class="bar bar-4 stat-1" style={{height: '78%'}}>
                        <span>6080</span>
                        </div>
                        <div class="bar bar-5 stat-2" style={{height: '78%'}}>
                        <span>6880</span>
                        </div>
                        <div class="bar bar-6 stat-3" style={{height: '78%'}}>
                        <span>1760</span>
                        </div>
                    </div>
                    <div class="bar-group">
                        <div class="bar bar-7 stat-1" style={{height: '78%'}}>
                        <span>6240</span>
                        </div>
                        <div class="bar bar-8 stat-2" style={{height: '72%'}}>
                        <span>5760</span>
                        </div>
                        <div class="bar bar-9 stat-3" style={{height: '36%'}}>
                        <span>2880</span>
                        </div></div>
                    <div class="bar-group">
                        <div class="bar bar-10 stat-1" style={{height: '44%'}}>
                        <span>3520</span>
                        </div>
                        <div class="bar bar-11 stat-2" style={{height: '64%'}}>
                        <span>5120</span>
                        </div>
                        <div class="bar bar-12 stat-3" style={{height: '59%'}}>
                        <span>4720</span>
                        </div>
                    </div>
                    <div class="bar-group">
                        <div class="bar bar-13 stat-1" style={{height: '28%'}}>
                        <span>2240</span>
                        </div>
                        <div class="bar bar-14 stat-2" style={{height: '33%'}}>
                        <span>2640</span>
                        </div>
                        <div class="bar bar-15 stat-3" style={{height: '94%'}}>
                        <span>7520</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
                <div className='dashboard-card__container'>
                        <div className='dashboard-card'>
                            <h2 className='dashboard-card__title'>
                            진행일수
                            </h2>
                            <p className='dashboard-card__detail'>
                            {record.createdAt != "" ? calculateTimeDifferenceByDate(record.createdAt) : 0}
                            <hr />
                            <h2 className='dashboard-card__title'>
                            가입일
                            </h2>
                            {record.createdAt != "" ? parseTimeDataToYYMMDD(record.createdAt) : record.createdAt}
                            </p>
                        </div>
                        
                        <div className='dashboard-card'>
                            <h2 className='dashboard-card__title'>
                            잔고 총액
                            </h2>
                            <p className='dashboard-card__detail'>
                            ${record.startprice}
                            </p>
                        </div>
                        
                        <div className='dashboard-card'>
                            <h2 className='dashboard-card__title'>
                            현재 총액
                            </h2>
                            <p className='dashboard-card__detail'>
                            ${record.currentprice}
                            </p>
                        </div>
                        
                        <div className='dashboard-card'>
                            <h2 className='dashboard-card__title'>
                            수익률
                            </h2>
                            <p className='dashboard-card__detail'>
                            {record.percentage} %
                            </p>
                        </div>
                        
                        <div className='dashboard-card'>
                            <h2 className='dashboard-card__title'>
                            종목상세
                            </h2>
                            <p className='dashboard-card__detail'>
                            24
                            </p>
                            <p className='dashboard-card__cta'><a href='#'>Manage</a></p>
                        </div>
                        
                </div>

                <div className='dashboard-card__container'>
                            <div className='dashboard-card dashboard-card--sm'>
                                <h2 className='dashboard-card__title'>
                                초기 가입일
                                </h2>
                                <p className='dashboard-card__detail'>
                                24
                                </p>
                                <p className='dashboard-card__cta'><a href='#'>Manage</a></p>
                            </div>
                            
                            <div className='dashboard-card dashboard-card--form'>
                                <div className='dashboard-card__header'>
                                <h2 className='dashboard-card__title'>
                                종목 리스트
                                </h2>
                                <p className='dashboard-card__detail'>
                                    [icon]
                                </p>
                                </div>
                                <div className='dashboard-card__body'>
                                <form>
                                    <fieldset>
                                    <legend>&nbsp; 투자의견서 청취희망<span>(check all that apply)&nbsp;</span></legend>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox" checked/> 
                                        <span className="label__text">종목선정</span>
                                        <span className="label__text--help">Buyers can make purchases and charge it to this account.</span>
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox"/> 
                                        <span className="label__text">장세판단</span>
                                        <span className="label__text--help">In addition to the above, Payers can also pay down the account balance.</span>
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                        <input type="checkbox"/> 
                                        <span className="label__text">종합의견</span>
                                        <span className="label__text--help">In addition to the above, Admins can also edit team members.</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"/> 
                                        <button id="email-input" className='button--inline' type='button'>이메일입력</button>
                                    </div>
                                    </fieldset>
                                </form>
                                </div>
                            </div>
                            
                </div>
                {/* <LinePlot/> */}
            </div>
            </div>
            
            {footer}
            </>
        )
    }
export default Asset;