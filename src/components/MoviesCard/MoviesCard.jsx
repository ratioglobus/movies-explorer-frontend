import React from 'react'
import './MoviesCard.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export default function MoviesCard ({ item, moviesSavedPage, isLiked }) {
  const { handleSaveMovie, handleDeleteMovie } = React.useContext(CurrentUserContext)
  const [liked, setLiked] = React.useState(false)

  const imgUrl = item.image.url
  ? `https://api.nomoreparties.co${item.image.url}`
  : item.image

  const oneHour = 60

  function durationInHours (mins) {
    const hours = Math.trunc(mins / oneHour)
    const minutes = mins % oneHour
    return `${hours}ч ${minutes}м`
  }

  function handleLikeClick () {
    !liked ? handleSaveMovie(item) : handleDeleteMovie(item)
  }

  function handleDeleteClick () {
    handleDeleteMovie(item)
  }

  React.useEffect(() => {
    setLiked(isLiked)
  }, [isLiked])


  return (
    <article className='card'>
      <a
        href={item.trailerLink}
        className='card__link links-hover-state'
        target='_blank'
        rel='noopener noreferrer'
      >

      <img src={imgUrl} alt='постер фильма' className='card__img' />
      </a>
      
      <div className='card__box'>
        <div className='card__info'>
          <p className='card__name'>{item.nameRU}</p>
          <p className='card__duration'>{durationInHours(item.duration)}</p>
        </div>
        {!moviesSavedPage ? (
          <button
            className={`buttons-hover-state card__button card__likeButton ${
              liked && 'card__likeButton_active'
            }`}
            onClick={handleLikeClick}
          ></button>
        ) : (
          <button className='buttons-hover-state card__button card__deleteButton'
            onClick={handleDeleteClick}
            type='button'>
          </button>
        )}
      </div>
    </article>
  )
}
