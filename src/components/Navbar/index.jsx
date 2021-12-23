import React from "react";
import { Link, Route } from "react-router-dom";

const menus = [
  {
    label: "Dashboard",
    to: "/",
    exact: true,
  },
  {
    label: "User",
    to: "/user",
    exact: false,
  },
  {
    label: "Schedule",
    to: "/schedule",
    exact: false,
  },
  {
    label: "Login",
    to: "/login",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let paths;
  if (to === "/") {
    paths = ["/", "/dashboard", "/dashboard/*"];
  } else if (to === "/schedule") {
    paths = ["/schedule", "/schedule/*"];
  } else {
    paths = to;
  }
  return (
    <Route
      path={paths}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <Link className={`nav-link ${active}`} to={to}>
            {label}
          </Link>
        );
      }}
    />
  );
};

const ShowMenus = (menus) => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.label}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};
const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="nav nav-pills nav-fill">{ShowMenus(menus)}</nav>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
