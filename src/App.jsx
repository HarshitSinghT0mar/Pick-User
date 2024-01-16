import { useState } from 'react'
import './App.css'
import UserList from './components/UsersList/UserList'

import Search from './components/Search';



function App() {
  const [selectedUsers, setSelectedUsers]=useState([])

console.log(selectedUsers);

  return (
    <div className='flex flex-col gap-5 justify-center items-center w-full h-screen'>
      <Search selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
      <UserList selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
      {/* <UserChip selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} /> */}
    </div>
  )
}

export default App
