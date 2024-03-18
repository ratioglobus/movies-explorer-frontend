import React from 'react'
import Switch from 'react-switch'
import './Checkbox.css'


export default function FilterCheckbox ({ checked, handleChange }) {

  return (
    <Switch
      onChange={handleChange}
      aria-checked={undefined}
      width={36}
      height={16}
      className='checkbox'
      checked={checked}
      handleDiameter={10}
      onColor='#2BE080'
      offColor='#C4C4C4'
      onHandleColor='#fff'
      offHandleColor='#fff'
      uncheckedIcon={false}
      checkedIcon={false}
      borderRadius={10}
      activeBoxShadow={'0 0 1px 2px #3456F3'}
    />
  )
}
