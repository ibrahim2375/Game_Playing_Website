'use client'
import '../../css/Layout/Button.css'
function Button({text,action,padding}) {
  return (
    <button className='general_btn' style={{padding: padding ? padding : '4px 5px'}} onClick={action}>
     <span>{text}</span>
   </button>
  )
}

export default Button