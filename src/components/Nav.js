
import { useState } from 'react'
import Sidebar from './Sidebar'

import { CgMenuLeftAlt } from 'react-icons/cg'

const Nav = () => {
    const [showNav, setShowNav] = useState(true) 

    return (
        <div className='nav'>
         <CgMenuLeftAlt className='giHam' onClick={() => {setShowNav(!showNav)}} />
         <Sidebar show={showNav} />
             <h1 className ='recipe-h1'>Recipe book</h1>

        </div>
    )
}

export default Nav
