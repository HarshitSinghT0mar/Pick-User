import { useState } from 'react'
import './App.css'
import UserList from './components/UsersList/UserList'

import Search from './components/Search';



function App() {
  



  return (
    <div className='flex flex-col gap-5 justify-center items-center w-full h-screen'>
      <Search />
      <UserList  />
     
    </div>
  )
}

export default App
