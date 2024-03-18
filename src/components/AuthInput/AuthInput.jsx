import './AuthInput.css'


export default function AuthInput ({ typeInput, idInput, labelText, error, ...props }) {
  
  return (
    <div className='authInput'>
      <label className='authInput__text' htmlFor={idInput}>{labelText}</label>
      <input
        type={typeInput}
        autoComplete='off'
        id={idInput}
        className='authInput__input'
        placeholder=' '
        {...props}
      />
      <span className='authInput__error'>{error}</span>
    </div>
  )
}
