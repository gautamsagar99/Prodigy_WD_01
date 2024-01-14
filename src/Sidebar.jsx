import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill} from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar, setActiveSection}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={() => setActiveSection('home')}>
                <BsGrid1X2Fill className='icon'/> Dashboard  
            </li>
            <li className='sidebar-list-item'  onClick={() => setActiveSection('about')}>    
                <BsFillArchiveFill className='icon'/> About
            </li>
            <li className='sidebar-list-item' onClick={() => setActiveSection('contact')}>
                <BsFillGrid3X3GapFill className='icon'/> Contact
            </li>
           
            
        </ul>
    </aside>
  )
}

export default Sidebar