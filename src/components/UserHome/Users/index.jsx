import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "../User";
import search from "../../../assets/images/icon/search.svg";
import "../UserHome.scss";
import { Button } from "../../Button/Button";

export const Users = ({ items, isLoading }) => {
  return (
    <>
      <div className="search">
        <img className="glass" src={search} alt="" />
        <input type="text" placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          <User />
        </ul>
      )}
      <Button className="send-invite-btn">Отправить приглашение</Button>
    </>
  );
};
