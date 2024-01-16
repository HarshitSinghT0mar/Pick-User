import { createContext, useContext, useState } from "react";
import { usersData } from "../components/UsersList/usersData";


export const UserContext=createContext()

export const UserContextProvider=({children})=>{
    const [selectedUsers, setSelectedUsers]=useState([])
    const [usersList, setUsersList]=useState(usersData)


    return <UserContext.Provider value={{usersList,setUsersList,selectedUsers,setSelectedUsers}}>
        {children}
    </UserContext.Provider>
}


export const useUserData=()=>{
    return useContext(UserContext)
}