import { Users } from "./Users";
import { Success } from "./Users/Success";
import "./UserHome.scss";

export const UserHome = () => {
  return (
    <>
      <div className="UserHome">
        <Users />
        {/*<Success />*/}
      </div>
    </>
  );
};
