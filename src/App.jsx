
import './App.css'
import UserList from './components/UsersList/UserList'

import Search from './components/Search';
import {  useSearch } from './contexts/SearchContext';



function App() {
  const {showList}=useSearch()
 


  return (
    <div className='flex flex-col gap-5 justify-center items-center w-full h-screen'>
      <Search />
     
     {showList? <UserList  />: null}
     
     
    </div>
  )
}

export default App
