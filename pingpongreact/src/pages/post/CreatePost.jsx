import React, {useState , useEffect , useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import CkEditor from '../../components/common/CkEditor5';

    function CreatePost({header,footer}){
        
        const jwtToken = Cookies.get("accessTokenCookie");
        const decodedAccToken = jwtDecode(jwtToken);
        const [post, setPost] = useState({

            title : "",
            content : "",
            category : ""

        });

        return(
            <>
            {header}
            <div className='post-create-view'>
                <div className="earmark-app">
                <div class="page-wrap">
                <h2>게시글 작성하기</h2>
                <form>
                    <div class="styled-input">
                        <input type="text" required />
                        <label>Name</label>
                        <span></span>
                    </div>
                    <div class="styled-input">
                        <input type="email" required />
                        <label>Email</label>
                        <span></span>
                    </div>
                    <div class="styled-input">
                        <input type="tel" required />
                        <label>Phone</label>
                        <span></span>
                    </div>
                    
                        <label>Message</label>
                        <CkEditor/>
                        <span></span>
                    
                </form>
                </div>
                </div>
            </div>
            {footer}
            </>
        )


    }
    export default CreatePost;