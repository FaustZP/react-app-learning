import React from "react";

export const NavLink = (where) => {
  return (
    <a href={where.link} class="nav_link">
      {where.sign}
    </a>
  );
};
