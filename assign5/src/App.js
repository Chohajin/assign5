import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header"; // Header 컴포넌트
import Footer from "./components/common/Footer"; // Footer 컴포넌트
import Home from "./components/Layout/Home"; // Home 컴포넌트
import CreateUser from "./components/User/CreateUser"; // 사용자 생성 페이지
import EditUser from "./components/User/EditUser"; // 사용자 수정 페이지
import ShowUser from "./components/User/ShowUser"; // 사용자 데이터 관리 페이지
import ShowList from "./components/Pages/Carosol"; // 캐러셀 컴포넌트

function App() {
  return (
    <div>
      {/* 공통 Header */}
      <Header />
      <Routes>
        {/* 각 경로에 맞는 컴포넌트 설정 */}
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/show-user" element={<ShowUser />} />
        <Route path="/show-list" element={<ShowList />} />
      </Routes>
      {/* 공통 Footer */}
      <Footer />
    </div>
  );
}

export default App;
