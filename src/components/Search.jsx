import React, { useEffect, useState } from "react";
import UserChip from "./UserChip";
import { useUserData } from "../contexts/UserContext";
import { usersData } from "./UsersList/usersData";


const Search = () => {
const {setUsersList}=useUserData()
const [query,setQuery]=useState('')
    const searchUser=(e)=>{
       setQuery(e.target.value)
    }

    useEffect(()=>{
if(query.length!==0){
    console.log(usersData.name);
    let finduser=usersData.filter((user)=>{
 return  user.name.toLowerCase().startsWith(query.toLowerCase())
    })

    setUsersList(finduser)
}else {
    setUsersList(usersData)
}
    
    },[query])
    
  return (
    <div className="border-b-[2px] border-solid border-[#000] flex items-end gap-2 p-1 h-auto max-w-[400px]">
      <UserChip
       
      />

      <input
        className="outline-none w-full h-4"
        placeholder="add new user"
        onChange={searchUser}
      />
    </div>
  );
};

export default Search;
