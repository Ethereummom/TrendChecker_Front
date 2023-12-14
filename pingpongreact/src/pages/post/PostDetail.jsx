import React, {useState , useEffect , useRef } from 'react';
import { Link, useNavigate , useParams } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Profile from '../../components/common/profile';
import { useHistory } from 'react-router-dom';

    function PostDetail({header, footer}){

        const [post, setPosts] = useState([]);
        
        const commonAPI = "http://localhost:8090/api/v1/"
        const jwtToken = Cookies.get("accessTokenCookie");
        const decodedAccToken = jwtDecode(jwtToken);
        const {postseq} = useParams();


        const getPostDetail = (postseq) => {
            Axios.get(commonAPI + `post/`+postseq , {
                headers : {
                    'Authorization' : `Bearer ${jwtToken}`
                }
            }).then((response) => {
                console.log(response.data);
            })
            .catch(error => console.log("error occured"));
        };

        useEffect(() => {
            getPostDetail(postseq);
        } , [postseq]);


        return (
            <>
            {header}
            <div>
                <h2>
                    게시물 상세 페이지 - 게시물 번호 : {postseq}
                </h2>
            </div>
            <div>
               
            </div>
            
           
            
            {footer}
            </>
        )

    }

    export default PostDetail;
