import { Row, Col, Carousel } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/imgonline-com-ua-Resize-K0WFetHlMq9nVbiu.jpg";
import "./home2.css";
export const Home = () => {
  return (
    <div className="home" style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col md={6} className="navs">
          <Carousel className="square">
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
          </Carousel>
          <Carousel className="square">
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
          </Carousel>
          <Carousel className="square">
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
            <div className="square-image">
              <img src={img} alt="nintendo" />
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};
