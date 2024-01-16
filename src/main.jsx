import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { SearchContextProvider } from './contexts/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContextProvider>
  <SearchContextProvider>
    <App />
    </SearchContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
