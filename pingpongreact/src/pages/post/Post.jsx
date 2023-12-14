import React, {useState , useEffect , useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Profile from '../../components/common/profile';
import { useHistory } from 'react-router-dom';
import { parseTimeDataToYYMMDD } from '../../global/TimeParser';

    function Post({header, footer}){

            const commonAPI = "http://localhost:8090/api/v1/"
            const navigate = useNavigate();

            const jwtToken = Cookies.get("accessTokenCookie");
            const decodedAccToken = jwtDecode(jwtToken);

            const [posts, setPosts] = useState([]);
            const [currentPage, setCurrentPage] = useState(1);
            const [totalPages, setTotalPages] = useState(1);
            
            const pageNumbers = Array.from({length : totalPages} , (_, index) => index + 1);

            const getPostListWithPaging = (currentPage) =>{
                Axios.get(commonAPI + `post?pageNumber=`+currentPage , {
                    headers : {
                        'Authorization' : `Bearer ${jwtToken}`
                    }
                }).then((response) => {
                    const responseData = response.data;
                    console.log(response.data);
                    console.log(response.data.data.dataList);
                    console.log("현재 페이지 :::: " +currentPage);

                    if(Array.isArray(response.data.data.dataList)){
                        setPosts(response.data.data.dataList)
                        setCurrentPage(response.data.data.currentPage);
                        setTotalPages(response.data.data.totalPages);
                    }else{
                        
                        console.log("빈 데이터 값입니다.")
                    }
                   
                })
                .catch(error => console.log("error occured"));

            };

          

            const getPostList = () =>{
                Axios.get(commonAPI + `post` , {
                    headers : {
                        'Authorization' : `Bearer ${jwtToken}`
                    }
                }).then((response) => {
                    const responseData = response.data;
                    console.log(response.data.data.dataList);

                    if(Array.isArray(response.data.data.dataList)){
                        setPosts(response.data.data.dataList)
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

            const readPost = (postseq) => {
                navigate(`/post/${postseq}`);

            }


            useEffect(() => {
                getPostList();
            }, []);
                






        return(
            <>
            {header}
            <div className = "postemptyspace"></div>
            <section className="notice">
                <div className = "noticeleftsection"></div>
                            <div className="page-title">
                                <div className="container">
                                    <h3>자유게시판</h3>
                                </div>
                            </div>

                            <div id="board-search">
                                <div className="container"></div>
                                <div className="container">
                                    <div className="search-window">
                                        <form action="">
                                            <div className="search-wrap">
                                                <label for="search" className="blind">공지사항 내용 검색</label>
                                                <input id="search" type="search" name="" placeholder="검색어를 입력해주세요.">
                                                </input>
                                                <button type="submit" className="btn btn-dark">검색</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        
                            <div id="board-list">
                                <div className="container">
                                    <table className="board-table">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="th-num">번호</th>
                                            <th scope="col" className="th-title">전략</th>
                                            <th scope="col" className="th-creator">작성자</th>
                                            <th scope="col" className="th-date">등록일</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {posts.map((post) => (
                                            <tr key={post.postseq} class = "post-table">
                                                <td onClick={() => readPost(post.postseq)}>{post.postseq}</td>
                                                <td onClick={() => readPost(post.postseq)}>{post.title}</td>
                                                <td onClick={() => readPost(post.postseq)}>{post.user.userid}</td>
                                                <td onClick={() => readPost(post.postseq)}> {parseTimeDataToYYMMDD(post.createdAt)}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>
                    <nav class="pagination-container">
                        <div class="pagination">
                            <a class="post-creator" onClick={()=> getPostListWithPaging(currentPage + 1)}>처음으로</a>
                                <a class="pagination-newer" onClick={()=> getPostListWithPaging(currentPage - 1)}>PREV</a>
                                <span class="pagination-inner">
                                    {pageNumbers.map((pageNumber) => (
                                        <a
                                        key={pageNumber}
                                        className={pageNumber === currentPage ? "pagination-active" : ""}
                                        onClick={() => getPostListWithPaging(pageNumber)}
                                    >
                                        {pageNumber}
                                    </a>
                                    ))}
                                </span>
                                <a class="pagination-older" onClick={()=> getPostListWithPaging(currentPage + 1)}>NEXT</a>
                                <a className="post-creator" href = "/createpost">작성하기</a>
                        </div>
                    </nav>             
            </section>
            {footer}
            </>
        )
    }

    export default Post;
