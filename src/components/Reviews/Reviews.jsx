import React from "react";

export const Reviews = ({ item }) => {
  return (
    <div className="feed">
      <h4>
        starstar<span>star</span>
      </h4>
      <p className="feedback">{item.feedText}</p>
      <div className="user-data">
        <img
          src={`./database/images/${item.feedUserAvatar}`}
          alt={item.feedUser}
        />
        <div className="name-adr">
          <p className="name">{item.feedUser}</p>
          <a href={item.feedUserURL} className="adress">
            {item.feedUserAdress}
          </a>
        </div>
      </div>
    </div>
  );
};
