import './ErrorNotFound.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ErrorNotFound () {
  const navigate = useNavigate()
  
  return (
    <section className='notFound'>
      <h1 className='notFound__title'>404</h1>
      <p className='notFound__text'>Страница не найдена</p>
      <button
        type='button'
        className='notFound__button buttons-hover-state'
        onClick={() => {
          navigate(-1)
        }}
      >
        Назад
      </button>
    </section>
  )
}