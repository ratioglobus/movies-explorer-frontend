import './AuthForm.css'

export default function AuthForm ({
  idForm,
  classForm,
  onSubmit,
  buttonText,
  children
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
      className={`${classForm} authForm`}
      name={idForm}
      onSubmit={handleSubmit}
    >
      {children}
      <button
        className='authForm__btn buttons-hover-state'
        type='submit'
        form={idForm}
      >
        {buttonText}
      </button>
    </form>
  )
}
