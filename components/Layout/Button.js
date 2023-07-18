'use client'
import '../../css/Layout/Button.css'
function Button({text,action}) {
  return (
    <button className='general_btn' onClick={action}>
     <b>{text}</b>
   </button>
  )
}

export default Button