import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import nintendo from "../../assets/artists1.png";
import valek from "../../assets/artists2.png";
import black from "../../assets/artists3.png";
import Guguzuko from "../../assets/artists4.png";
import "./Artists.css";
const { Paragraph } = Typography;
export const Artists = () => {
  return (
    <div className="artists">
      <Row>
        <Item name="Nintendo" url="/nintendo" img={nintendo} />
        <Item name="Valek" url="/Valek" img={valek} />
        <Item name="Black" url="/Black" img={black} />
        <Item name="Guguzuko" url="/Guguzuko" img={Guguzuko} />
      </Row>
    </div>
  );
};
const Item = ({ name, url, img }) => {
  return (
    <>
      <Col md={24} className="artist-body">
        <Paragraph>
          <Link to={url} className="artist">
            {name}
            <div className="num">01</div>
            <div className="background-overlay"></div>
          </Link>
        </Paragraph>
        <img src={img} alt={name} className="img" />
      </Col>
    </>
  );
};
