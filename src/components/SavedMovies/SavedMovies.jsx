import React from 'react'
import './SavedMovies.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export default function SavedMovies ({ movies }) {
  const { isLoading, isLogged } = React.useContext(CurrentUserContext)

  const [searchQuery, setSearchQuery] = React.useState('')
  const [checkedFilterShortFilms, setCheckedFilterShortFilms] = React.useState(false)
  const [showList, setShowList] = React.useState([])

  const shortFilmDuration = 40

  function handleChangeCheckedFilter (event) {
    setCheckedFilterShortFilms(event)
  }

  function handleChangeSearchQuery (event) {
    setSearchQuery(event.target.value)
  }

  function filterShortMovies (movies) {
    return movies.filter(movie => movie.duration < shortFilmDuration)
  }

  function filterMovies (arrMovies, searchQuery, shortFilms) {
    const moviesByQuery = arrMovies.filter(movie => {
      const nameRu = movie.nameRU.toLowerCase()
      const nameEn = movie.nameEN.toLowerCase()
      const searchName = searchQuery.toLowerCase().trim()
      return (
        nameRu.indexOf(searchName) !== -1 || nameEn.indexOf(searchName) !== -1
      )
    })

    if (shortFilms) {
      return filterShortMovies(moviesByQuery)
    }

    return moviesByQuery
  }

  function handleSearchSubmit () {
    setShowList(filterMovies(movies, searchQuery, checkedFilterShortFilms))
  }

  React.useEffect(() => {
    const arr = filterMovies(movies, searchQuery, checkedFilterShortFilms)
    setShowList(arr)
  }, [checkedFilterShortFilms, movies])
  
  return (
    <>
      <Header isLogged={isLogged} mainPage={false} />

      <main className='savedMoviesPage'>
        <SearchForm
          searchQuery={searchQuery}
          handleChangeSearchQuery={handleChangeSearchQuery}
          checkedFilter={checkedFilterShortFilms}
          handleChangeCheckedFilter={handleChangeCheckedFilter}
          onSubmit={handleSearchSubmit}
        />
        <MoviesCardList
          moviesSavedPage={true}
          movies={showList}
          errorText={'Ничего не найдено'}
        />
      </main>

      <Footer />
      {isLoading && <Preloader />}
    </>
  )
}
