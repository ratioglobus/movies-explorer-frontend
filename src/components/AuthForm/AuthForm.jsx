import './AuthForm.css'


export default function AuthForm ({
  buttonText,
  children,
  isValid,
  idForm,
  classForm,
  onSubmit,
  apiMessage
}) {
  
  return (
    <form
      action='#'
      method='POST'
      id={idForm}
      noValidate
      name={idForm}
      className={`${classForm} authForm`}
      onSubmit={onSubmit}
    >
      {children}
      
      <div className='authForm__box'>
      <span className='authForm__apiMessage'>{apiMessage}</span>
        <button
          className={`authForm__btn ${
            isValid ? 'buttons-hover-state' : 'authForm__btn-disabled'
          }`}
          type='submit'
          form={idForm}
          disabled={!isValid}
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}
