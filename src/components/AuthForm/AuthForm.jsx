import './AuthForm.css'

export default function AuthForm ({
  idForm,
  classForm,
  onSubmit,
  buttonText,
  children,
  isValid,
  apiMessage
}) {
  function handleSubmit (event) {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form
      action='#'
      method='POST'
      id={idForm}
      noValidate
      name={idForm}
      className={`${classForm} authForm`}
      onSubmit={handleSubmit}
      placeholder='Форма авторизации'
    >
      {children}
      
      <div className='authForm__box'>
        <span className='authForm__apiMessage'>{apiMessage}</span>

        <button
          className={`authForm__btn ${
            isValid ? 'buttons-hover-state' : 'authForm__btn-disabled'
          }`}
          disabled={!isValid}
          type='submit'
          form={idForm}
        >
        {buttonText}
        </button>
      </div>
    </form>
  )
}
