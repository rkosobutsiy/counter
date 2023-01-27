import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "../User";
import search from "../../../assets/images/icon/search.svg";
import "../UserHome.scss";
import { Button } from "../../Button/Button";

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
}) => {
  return (
    <>
      <div className="search">
        <img className="glass" src={search} alt="" />
        <div className="input-count">
          <input
            value={searchValue}
            onChange={onChangeSearchValue}
            type="text"
            placeholder="Найти пользователя..."
          />
          <h2 className="count">{invites.length}</h2>
        </div>
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase(); // ?
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj) => (
              <User
                onClickInvite={onClickInvite}
                isInvited={invites.includes(obj.id)}
                key={obj.id}
                {...obj}
              />
            ))}
        </ul>
      )}
      <Button
        disabled={invites.length < 1}
        onClick={onClickSendInvites}
        className="send-invite-btn"
      >
        Отправить приглашение
      </Button>
    </>
  );
};
