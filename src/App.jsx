
import './App.css'
import UserList from './components/UsersList/UserList'

import Search from './components/Search';
import {  useSearch } from './contexts/SearchContext';



function App() {
  const {showList}=useSearch()
 




  return (
    <div className='flex p-4 flex-col gap-5 justify-start items-center w-full h-screen'>
    <h1 className='text-green-900 font-extrabold text-3xl mb-10'>Pick A User</h1>
      <Search />
     
     {showList? <UserList  />: null}
     
     
    </div>
  )
}

export default App
