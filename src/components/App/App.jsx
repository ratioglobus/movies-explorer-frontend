import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies.jsx'
import SavedMovies from '../SavedMovies/SavedMovies.jsx'
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound.jsx'

import Profile from '../Profile/Profile.jsx'
import Login from '../Login/Login.jsx'
import Register from '../Register/Register.jsx'


export default function App () {
  const [currentUser, setCurrentUser] = React.useState({ name: 'Синдзи Икари', email: 'sindziik@gmail.com' })
  const [isLogged, setIsLogged] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={{ currentUser, isLoading, isLogged }}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />

          <Route path='*' element={<ErrorNotFound />} />

          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  )
}
