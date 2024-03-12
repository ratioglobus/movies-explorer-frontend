import React from 'react'
import Switch from 'react-switch'
import './Checkbox.css'


export default function Checkbox () {
  const [checked, setChecked] = React.useState(false)
  const handleChange = nextChecked => {
    setChecked(nextChecked)
  }

  return (
    <Switch
      onChange={handleChange}
      className='checkbox'
      checked={checked}
      handleDiameter={10}
      width={36}
      height={16}
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
