import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <NavLink to="/" style={{textDecoration: 'none'}}>로고(홈으로이동)</NavLink>
  );
}

export default Nav;