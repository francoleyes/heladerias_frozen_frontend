import React from "react";
import "./Layout.scss";
import NavBar from "./NavBar";

function Layout(props) {
  const { children } = props;
  return <div className="found">
    <NavBar />
    {children}
    </div>;
}

export default Layout;
