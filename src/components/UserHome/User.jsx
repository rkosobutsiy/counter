import React from "react";
import user from "../../assets/images/icon/user.svg";
import plus from "../../assets/images/icon/plus.svg";
import deleteImg from "../../assets/images/icon/deleteImg.svg";
import "./UserHome.scss";

export const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}) => (
  <li>
    <div>
      <img className="avatars" src={avatar} alt="User" />
      <div>
        <h3>
          {first_name} {last_name}
        </h3>
        <p>
          <img className="user" src={user} alt="" />
          {email}
        </p>
      </div>
    </div>
    <img
      onClick={() => onClickInvite(id)}
      className="action"
      src={isInvited ? deleteImg : plus}
      alt="Action"
    />
  </li>
);
