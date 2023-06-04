import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "./component/Header";
export const Main = () => {
  return (
    <>
      <Row justify="center" style={{ height: "100vh" }}>
        <Col md={22} style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
          <footer
            style={{
              height: 10,
              flex: 0,
              width: "100%",
              background: "black",
              display: "block",
            }}
          ></footer>
        </Col>
      </Row>
    </>
  );
};
