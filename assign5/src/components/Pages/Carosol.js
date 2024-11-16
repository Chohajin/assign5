import React from "react";

const Carasol = () => {
  return (
    <div className="carasol-container">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.handong.edu/dcp/editor/images/(%EC%82%AC%EC%A7%841)%20%ED%95%9C%EB%8F%99%EB%8C%80%ED%95%99%EA%B5%90%20%EC%BA%A0%ED%8D%BC%EC%8A%A4%20%EC%A0%84%EA%B2%BD(3).jpg"
              alt="Los Angeles"
              className="d-block w-100"
            />
          </div>
          
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Carasol;
