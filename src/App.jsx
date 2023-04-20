import { useState } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import WelcomePage from './components/Content/WelcomePage/WelcomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResultsPage from './components/Content/ResultsPage/ResultsPage'
import UserContext from './components/UserContext/UserContext'
function App() {
  const [user, setUser] = useState(false)
  

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Nav/><WelcomePage/><Footer/></>}/>
            <Route path='/results' element={<><Nav/><ResultsPage/><Footer/></>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
