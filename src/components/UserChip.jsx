import React from "react";
import { useUserData } from "../contexts/UserContext";
import { usersData } from "./UsersList/usersData";

const UserChip = ({ highLightedUser }) => {
  const { selectedUsers, setSelectedUsers, setUsersList } = useUserData();
  let removeUser = (id) => {
    let remainingUsers = selectedUsers?.filter((user) => {
      //remove user
      return user.id !== id;
    });
    setSelectedUsers(remainingUsers);
    let removedUser = usersData.find((user) => user.id === id);
    setUsersList((prev) => [...prev, removedUser]); //update user list again while revoking
  };

  return (
    <div className="flex gap-2 max-w-max flex-wrap  ">
      {selectedUsers?.map((user) => {
        return (
          <div
            key={user.id}
            className={`flex bg-[#ccc] border-2  border-solid gap-2 rounded-md py-1 px-[4px] max-w-max text-nowrap ${
              highLightedUser === user.id ? "border-red-500" : ""
            }`}
          >
            <p className="text-sm">{user.name}</p>
            <span
              onClick={() => removeUser(user.id)}
              className="font-bold text-red-500 cursor-pointer"
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default UserChip;
