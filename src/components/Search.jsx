import React, { useEffect, useState } from "react";
import UserChip from "./UserChip";
import { useUserData } from "../contexts/UserContext";
import { usersData } from "./UsersList/usersData";
import { useSearch } from "../contexts/SearchContext";

const Search = () => {
  const { setUsersList, selectedUsers, setSelectedUsers } = useUserData();
  const { showList, setShowList } = useSearch();
  const { query, setQuery } = useSearch();
  const [highLightedUser, setHighlightedUser] = useState();
 

  const searchUser = (e) => {
    setQuery(e.target.value);
  };

  //search user with name
  useEffect(() => {
    if (query.length !== 0) {
      let finduser = usersData.filter((user) => {
        return user.name.toLowerCase().startsWith(query.toLowerCase());
      });

      setUsersList(finduser);
    } else {
      setUsersList(usersData);
    }
  }, [query]);

  //show list on input focus
  const handleShowList = () => {
    setShowList(true);

    // console.log(clientX);
    // setCursorPosition({ x: clientX, y: clientY });
  };

  // highlight and remove user on backspace
  const handleKeyDown = (event) => {
    if (
      event.key === "Backspace" &&
      query === "" &&
      selectedUsers.length !== 0
    ) {
      setHighlightedUser(selectedUsers.slice(-1)[0].id);
      if (highLightedUser) {
        let remainingUsers = selectedUsers.filter(
          (user) => user.id !== highLightedUser
        );
        setSelectedUsers(remainingUsers);

        let removedUser = usersData.find((user) => user.id === highLightedUser); //set users back to list
        setUsersList((prev) => [...prev, removedUser]);
        setHighlightedUser(null)
      }
    }
  };
  return (
    <div className="border-b-[2px] flex-wrap border-solid border-[#000] flex items-end gap-2 p-1 h-auto w-[600px]">
    <div className="grow max-w-max">
      <UserChip highLightedUser={highLightedUser} />
      </div>

      <input
        className="outline-none max-w-full shrink"
        placeholder="add new user"
        onChange={searchUser}
        onFocus={handleShowList}
        onKeyDown={handleKeyDown}
        value={query}
        // onBlur={handleShowList}
      />
    </div>
  );
};

export default Search;
