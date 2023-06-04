import { Image, Row, Col } from "antd";
import { useState } from "react";
function importAll(r) {
  return r.keys().map(r);
}

export const Work = () => {
  const [visible, setVisible] = useState(false);
  const images = importAll(
    require.context("../../assets/disa", false, /\.(png|jpe?g|svg|PNG|JPE?G)$/)
  );
  console.log(images);
  return (
    <>
      <div className="work">
        <Row align="stretch" gutter={16}>
          {images.map((item, i) => (
            <Col
              md={8}
              span={12}
              sm={8}
              xs={6}
              key={i}
              lg={4}
              style={{ marginTop: 16 }}
            >
              <Image src={item} style={{ height: "100%" }} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
