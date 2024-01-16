import React  from 'react'
import { useUserData } from '../../contexts/UserContext'

const UserList = () => {
const {setSelectedUsers,selectedUsers,usersList}=useUserData()
  const onUserSelect=(user)=>{

    let userExist=selectedUsers.some(item=>item.id===user.id)
    if(userExist) return

     setSelectedUsers((prev)=>([...prev,user]))
  }
 
  return (
    <div className='flex flex-col gap-1 max-w-max p-3 border-[1px] border-solid border-[#ECECEC] overflow-y-auto max-h-[300px]'>
      {usersList?.map((user)=>{
return <ListItem user={user} key={user.id} onUserSelect={onUserSelect} />
      })}
    </div>
  )
}

const ListItem=({user,onUserSelect})=>{
let {name , image,id, email}=user
    return (
       <div className='flex gap-4 text-sm items-center hover:bg-[#ccc] p-2 cursor-pointer transition-all duration-100' onClick={()=>onUserSelect(user)}>
         <div className='w-12 h-12 rounded-[50%]'>
            <img src={image} className='w-full h-full object-cover rounded-[50%]'/>
         </div>
         <p>{name}</p>
         <p className='font-light'>{email}</p>
       </div>
    )
}

export default UserList
