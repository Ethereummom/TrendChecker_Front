import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from "axios";
import './App.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Asset from './pages/asset/Asset'
import TradingViewWidget from "./components/tradingview/TradingViewWidget";
import TradingViewWidgetTicker from "./components/tradingview/TradingViewWidgetTicker";
import Main from "./pages/Main";
import Post from "./pages/post/Post";
import PostDetail from "./pages/post/PostDetail";
import AssetList from "./pages/asset/AssetList";
import CreatePost from "./pages/post/CreatePost";

function App() {
  // 사용자 목록을 저장하기 위한 상태
  const [userList, setUserList] = useState([]);

  // 컴포넌트가 마운트될 때 사용자 목록을 불러옵니다.

  return (
    <div className = "App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage/>}/>
          <Route path = "/SignUp" element = {<SignUp/>}/>
          <Route path = "/User" element = {<User header= {<Header/>} footer={<Footer/>}/>}/>
          <Route path = "/Asset/:recordseq" element = {<Asset header= {<Header/>} footer={<Footer/>}/>}/>
          <Route path = "/Main" element = {<Main header= {<Header/>} footer={<Footer/>}/>}/>
          <Route path = "/Post" element = {<Post header= {<Header/>} footer={<Footer/>}/>}/>
          <Route path = "/Post/:postseq" element = {<PostDetail header= {<Header/>} footer={<Footer/>}/>}/>
          <Route path = "/AssetList" element = {<AssetList header= {<Header/>} footer={<Footer/>}/>}/>
          <Route path = "/CreatePost" element = {<CreatePost header= {<Header/>} footer={<Footer/>}/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;