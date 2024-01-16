import React from 'react'
import { useUserData } from '../contexts/UserContext'

const UserChip = () => {
  const {selectedUsers,setSelectedUsers}=useUserData()
    let removeUser=(id)=>{
     let remainingUsers=selectedUsers?.filter((user)=>{
           return user.id!==id
     })
     setSelectedUsers(remainingUsers)
    }
  return (
    <div className='flex gap-1 flex-wrap'>
      {selectedUsers?.map((user)=>{
        return  <div key={user.id} className='flex bg-[#ccc] gap-2 rounded-sm py-1 px-[4px] max-w-max text-nowrap'>
           <p>{user.name}</p>
           <span onClick={()=>removeUser(user.id)} className='font-bold text-red-500 cursor-pointer'>X</span>
        </div>
      })}
    </div>
  )
}

export default UserChip
