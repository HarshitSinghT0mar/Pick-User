import React, { useState } from "react";
import UserChip from "./UserChip";
import { useState } from "react";

const Search = ({ selectedUsers, setSelectedUsers }) => {

    const searchUser=(e)=>{
       setQuery(e.target.value)
    }
    
  return (
    <div className="border-b-[2px] border-solid border-[#000] flex items-end gap-2 p-1 h-auto max-w-[400px]">
      <UserChip
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
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
