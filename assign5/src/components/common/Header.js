import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          {/* 왼쪽 이름 및 학번 표시 */}
          <Link to="/" className="navbar-brand">
            <span className="navbar-text">22300726 Hajin Cho</span>
          </Link>
          {/* 햄버거 메뉴 버튼 */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* 오른쪽 정렬된 네비게이션 메뉴 */}
          <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link text-uppercase" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-uppercase" to="/create-user">
                  Sign In
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-uppercase" to="/show-user">
                  Show User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
