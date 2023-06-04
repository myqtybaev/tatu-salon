import { NavLink } from "react-router-dom";
import { Button, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";
import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [state, setState] = useState(false);
  const { md } = Grid.useBreakpoint();
  const close = () => setState(false);
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="vatattoo" />
        </NavLink>
      </div>
      {md ? (
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/artists"
              >
                Мастера
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/work"
              >
                Наши работы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                О нас
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <Button
          icon={<MenuOutlined />}
          style={{ background: "black", color: "#fff" }}
          size="large"
          onClick={() => setState(true)}
        ></Button>
      )}
      <Drawer
        open={state}
        onClose={close}
        width={"100%"}
        style={{ backgroundColor: "black", color: "#fff" }}
        placement="left"
      >
        <nav className="menu-mobile">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
                onClick={close}
              >
                Студия
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/artists"
                onClick={close}
              >
                Мастера
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/work"
                onClick={close}
              >
                Наши работы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
                onClick={close}
              >
                О нас
              </NavLink>
            </li>
          </ul>
        </nav>
      </Drawer>
    </header>
  );
};
