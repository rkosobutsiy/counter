import React from "react";
import user from "../../assets/images/icon/user.svg";
import plus from "../../assets/images/icon/plus.svg";
import "./UserHome.scss";

export const User = () => (
  <li>
    <div>
      <img
        className="avatars"
        src="https://reqres.in/img/faces/1-image.jpg"
        alt="User"
      />
      <div>
        <h3>Amon Bower</h3>
        <p>
          <img className="user" src={user} alt="" />
          george.bluth@reqres.in
        </p>
      </div>
    </div>
    <img className="action" src={plus} alt="Action" />
  </li>
);
