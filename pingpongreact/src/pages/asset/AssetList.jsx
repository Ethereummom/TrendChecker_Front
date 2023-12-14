import React, {useState , useEffect , useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Profile from '../../components/common/profile';
import { useHistory } from 'react-router-dom';
import { parseTimeDataToYYMMDD } from '../../global/TimeParser';

    function AssetList({header, footer}){

            const commonAPI = "http://localhost:8090/api/v1/"
            const navigate = useNavigate();

            const jwtToken = Cookies.get("accessTokenCookie");

            const decodedAccToken = jwtDecode(jwtToken);

            const [records, setRecords] = useState([]);
            const [currentPage, setCurrentPage] = useState(1);
            const [totalPages, setTotalPages] = useState(1);
            
            const pageNumbers = Array.from({length : totalPages} , (_, index) => index + 1);

            const getAssetListWithPaging = (currentPage) =>{
                Axios.get(commonAPI + `record?PageNumber=`+currentPage , {
                    headers : {
                        'Authorization': `Bearer ${jwtToken}`
                    }
                }).then((response) => {
                    const responseData = response.data;
                    console.log(response.data.data.dataList);
                    console.log("현재 페이지 :::: " +currentPage);

                    if(Array.isArray(response.data.data.dataList)){
                        setRecords(response.data.data.dataList)
                        setCurrentPage(response.data.data.currentPage);
                        setTotalPages(response.data.data.totalPages);
                    }else{
                        
                        console.log("빈 데이터 값입니다.")
                    }
                   
                })
                .catch(error => console.log("error occured"));

            };

          

            const getAssetList = () =>{
                console.log(`Bearer ${jwtToken}`);
                Axios.get(commonAPI + `record`, {
                    headers : {
                        'Authorization' : `Bearer ${jwtToken}`
                    }
                }).then((response) => {
                    const responseData = response.data;
                    console.log(response.data);

                    if(Array.isArray(response.data.data.dataList)){
                        setRecords(response.data.data.dataList)
                        setCurrentPage(response.data.data.currentPage);
                        setTotalPages(response.data.data.totalPages);
                    }else{
                        
                        console.log("빈 데이터 값입니다.")
                    }
                   
                })
                .catch(error => console.log("error occured"));

            };

            const goPrevPage = ()=>{

            }

            const goNextPage = ()=>{

            }

            const readRecord = (recordseq) => {
                navigate(`/Asset/${recordseq}`);

            }


            useEffect(() => {
                getAssetList();
            }, []);
                






        return(
            <>
            {header}
            <div className = "postemptyspace"></div>
            <section className="notice">
                <div className = "noticeleftsection"></div>
                            <div className="page-title">
                                <div className="container">
                                    <h3>이용 서비스 리스트</h3>
                                </div>
                            </div>

                        
                            <div id="board-list">
                                <div className="container">
                                    <table className="board-table">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="th-num">번호</th>
                                            <th scope="col" className="th-title">전략</th>
                                            <th scope="col" className="th-startprice">시작금액</th>
                                            <th scope="col" className="th-currentprice">현재금액</th>
                                            <th scope="col" className="th-profit">수익률</th>
                                            <th scope="col" className="th-date">등록일</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {records.map((records) => (
                                            <tr key={records.recordseq} class = "post-table">
                                                <td onClick={() => readRecord(records.recordseq)}>{records.recordseq}</td>
                                                <td onClick={() => readRecord(records.recordseq)}>{records.asset}</td>
                                                <td onClick={() => readRecord(records.recordseq)}>{records.startprice}</td>
                                                <td onClick={() => readRecord(records.recordseq)}>{records.currentprice}</td>
                                                <td onClick={() => readRecord(records.recordseq)}>{records.percentage}%</td>
                                                <td onClick={() => readRecord(records.recordseq)}> {parseTimeDataToYYMMDD(records.createdAt)}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>
                    <nav class="pagination-container">
        <div class="pagination">
                <a class="pagination-newer" onClick={()=> getAssetListWithPaging(currentPage - 1)}>PREV</a>
                <span class="pagination-inner">
                    {pageNumbers.map((pageNumber) => (
                        <a
                        key={pageNumber}
                        className={pageNumber === currentPage ? "pagination-active" : ""}
                        onClick={() => getAssetListWithPaging(pageNumber)}
                        >
                        {pageNumber}
                        </a>
                    ))}
                </span>
                <a class="pagination-older" onClick={()=> getAssetListWithPaging(currentPage + 1)}>NEXT</a>
                
        </div>
                    </nav>   
            </section>
            


             
            {footer}
            </>

        )
    }

    export default AssetList;
