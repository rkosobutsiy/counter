import { Users } from "./Users";
import { Success } from "./Users/Success";
import "./UserHome.scss";
import { useEffect, useState } from "react";

export const UserHome = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Произошла ошибка");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (ev) => {
    setSearchValue(ev.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <>
      <div className="UserHome">
        {success ? (
          <Success setSuccess={setSuccess} count={invites.length} />
        ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users}
            isLoading={isLoading}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSendInvites={onClickSendInvites}
          />
        )}
      </div>
    </>
  );
};
