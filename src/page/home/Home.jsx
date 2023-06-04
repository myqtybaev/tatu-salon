import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { Row, Col } from "antd";
import { useState } from "react";
import artists1 from "../../assets/artists1.png";
import artists2 from "../../assets/artists2.png";
import artists3 from "../../assets/artists3.png";
import artists4 from "../../assets/artists4.png";
import gif from "../../assets/doc_2023-06-04_12-06-15.gif";
import "./Home.css"; // Подключение стилей
import { useEffect } from "react";
export const Home = () => {
  return (
    <>
      <Row className="home" justify="space-between">
        <Col
          md={5}
          className="menus"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <SquareWithSlider
            to="/artists"
            image={[artists1, artists2, artists3, artists4]}
          />
          <SquareWithSlider
            to="/artists"
            image={[artists1, artists2, artists3, artists4]}
            two
          />
          <SquareWithSlider
            to="/artists"
            image={[artists1, artists2, artists3, artists4]}
          />
        </Col>
        <Col md={18} style={{ height: "100%" }}>
          <Carousel>
            <div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: "50%" }}>
                  <img
                    src={gif}
                    alt="GIF"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Моя жизнь - татуировки. Я - гей тату мастер, и это что-то
                    большее, чем работа. Татуировки – это искусство, способ
                    самовыражения и пути к самопознанию. В моей работе нет
                    никаких границ, я создаю произведения искусства, которые
                    основаны на культуре, экспериментах и смелости. Мои клиенты
                    – люди, которые доверяют мне свои истории, желания и тайны,
                    чтобы я мог воплотить их в живую картину на их теле. Я
                    горжусь тем, что через свою работу я могу помочь людям
                    принять себя и быть собой.
                  </p>
                </div>
              </div>
            </div>
            {/* Добавьте остальные слайды */}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};
const SquareWithSlider = ({ to, image, two }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // Изменили значение на true при наведении
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Изменили значение на false при уходе курсора
  };

  useEffect(() => {
    console.log("render");
  });

  return (
    <Link to={to} className={two ? "square-link two" : "square-link"}>
      <div
        className="square-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel autoplay={isHovered} autoplaySpeed={3000} dots={false}>
          {image.map((item) => (
            <div className="slide">
              <img src={item} alt={item} />
            </div>
          ))}
        </Carousel>
        <div className="overlay">
          <h1>Мастер</h1>
        </div>
      </div>
    </Link>
  );
};
