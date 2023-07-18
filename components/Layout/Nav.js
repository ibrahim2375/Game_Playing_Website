import React from 'react'
import Button from './Button'
//css
import '../../css/Layout/Nav.css'
import '../../css/Layout/Button.css'

function Nav() {
  return (
   <nav className='fixed top-0 right-0 bg-transparent px-10  py-5 z-10'>
    <ul className='flex items-center gap-4'>
     <li><a href='#characters' className='text-white'>characters</a></li>
     <li><a href='#location' className='text-white'>location</a></li>  
     <li><a href='#gameplay' className='text-white'>gameplay</a></li>  
     <li><Button text={'Buy'}/></li>  
    </ul> 
    {/* button */}
   </nav>
  )
}

export default Nav