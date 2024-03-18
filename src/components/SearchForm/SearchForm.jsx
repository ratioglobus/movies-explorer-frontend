import React from 'react'
import './SearchForm.css'
import Checkbox from '../Checkbox/Checkbox'


export default function SearchForm ({
    searchQuery,
    handleChangeSearchQuery,
    checkedFilter,
    handleChangeCheckedFilter,
    onSubmit
  }) {

  function handleSubmit (event) {
    event.preventDefault()
    onSubmit()
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
            required
            id='searchForm__box'
            name='searchForm__box'
            className='searchForm__input'
            placeholder='Фильм'
            autoComplete='off'
            value={searchQuery}
            onChange={handleChangeSearchQuery}
          />
          
          <button
            type='submit'
            form='searchForm'
            className='searchForm__button buttons-hover-state'
          />
        </div>
        
        <div className='searchForm__filter'>
          <Checkbox
            checked={checkedFilter}
            handleChange={handleChangeCheckedFilter}
        />

        <span className='searchForm__filter-text'>Короткометражки</span>
        </div>
      </form>
    </section>
  )
}
