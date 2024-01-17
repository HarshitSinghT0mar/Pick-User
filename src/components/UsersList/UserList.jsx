import React from "react";
import { useUserData } from "../../contexts/UserContext";
import { useSearch } from "../../contexts/SearchContext";

const UserList = () => {
  const { setSelectedUsers, selectedUsers, usersList,setUsersList } = useUserData();
  const {setQuery}=useSearch()

  const onUserSelect = (user) => {
    // let userExist = selectedUsers.some((item) => item.id === user.id);  //return if user is already selected
    // if (userExist) return;

    setSelectedUsers((prev) => [...prev, user]);

    let restListUsers=usersList.filter((list)=>{
        return user.id!==list.id
    })                                             

    setUsersList(restListUsers)           //delete user from list upon selecting
    setQuery('')
  };

  return (
    <div className="flex flex-col gap-1 max-w-max p-3 border-[1px] border-solid border-[#ECECEC] overflow-y-auto max-h-[300px]">
      {usersList.length!==0 ? usersList?.map((user,index) => {
        return (
          <ListItem user={user} key={index} onUserSelect={onUserSelect} />
        );
      }): <p>No User</p>}
    </div>
  );
};

const ListItem = ({ user, onUserSelect }) => {
  let { name, image, email } = user;
  return (
    <div
      className="flex gap-4 text-sm items-center hover:bg-[#ccc] p-2 cursor-pointer transition-all duration-100"
      onClick={(e) => {
     
        onUserSelect(user);
      }}
    >
      <div className="w-12 h-12 rounded-[50%]">
        <img src={image} className="w-full h-full object-cover rounded-[50%]" />
      </div>
      <p>{name}</p>
      <p className="font-light">{email}</p>
    </div>
  );
};

export default UserList;
