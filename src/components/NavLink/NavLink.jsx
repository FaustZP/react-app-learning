import React from "react";

export const NavLink = (where) => {
  return (
    <a href={where.link} className="nav_link">
      {where.label}
    </a>
  );
};
