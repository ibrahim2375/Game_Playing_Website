//icons
import {BsFillPlayFill} from 'react-icons/bs'
function Preview() {
  return (
    <div className='flex gap-2 items-center cursor-pointer'>
        <div className='container-mask grid place-items-center h-20 w-20 rounded-full'>
          <BsFillPlayFill />
        </div>
         <p>PREVIEW</p>
    </div>
  )
}

export default Preview