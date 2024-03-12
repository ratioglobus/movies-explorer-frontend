import React from 'react'
import './SearchForm.css'
import Checkbox from '../Checkbox/Checkbox'

export default function SearchForm () {
  const [movieName, setMovieName] = React.useState('')

  function handleChangeMovieName (event) {
    setMovieName(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
  }

  return (
    <section className='searchForm'>
      <form
        action='#'
        id='searchForm'
        className='searchForm__form'
        name='searchForm'
        method='POST'
        onSubmit={handleSubmit}
      >
        <div className='searchForm__box'>
          <input
            type='text'
            id=''
            name=''
            className='searchForm__input'
            placeholder='Фильм'
            autoComplete='off'
            value={movieName}
            onChange={handleChangeMovieName}
          />
          
          <button
            type='submit'
            form='searchForm'
            className='searchForm__button buttons-hover-state'
          />
        </div>
        <label className='searchForm__filter'>
          <Checkbox />
          <span className='searchForm__filter-text'>Короткометражки</span>
        </label>
      </form>
    </section>
  )
}
