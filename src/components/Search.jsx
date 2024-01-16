import React, { useEffect, useState } from "react";
import UserChip from "./UserChip";
import { useUserData } from "../contexts/UserContext";
import { usersData } from "./UsersList/usersData";
import { useSearch } from "../contexts/SearchContext";


const Search = () => {
const {setUsersList}=useUserData()
const {showList,setShowList}=useSearch()
const {query,setQuery}=useSearch()

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

    const handleShowList=()=>{
        setShowList(true)
    }
    
  return (
    <div className="border-b-[2px] flex-wrap border-solid border-[#000] flex items-end gap-2 p-1 h-auto w-[500px]">
      <UserChip/>

      <input
        className="outline-none max-w-full h-4"
        placeholder="add new user"
        onChange={searchUser}
        onFocus={handleShowList}
        value={query}
        // onBlur={handleShowList}
     
      />
    </div>
  );
};

export default Search;
