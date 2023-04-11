import React, { useState } from "react";
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faBars }  from '@fortawesome/free-solid-svg-icons'
import { 
    Link
  } from 'react-router-dom';


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    let menu 
    let menuMarks

    if(showMenu){
        menu = <div className="bg-white fixed top-0 left-0 w-4/5 h-full z-50">
            <span className="font-bold">This is menu</span>

            <ul>
            <li>
                <Link 
                    to="/" 
                    className='text-blue-500'
                     onClick={() => setShowMenu(false)}    

                >
                    Trang chủ
                </Link>
            </li>
            <li>
                <Link 
                    to="/topSearch" 
                    className='text-blue-500'
                    onClick={() => setShowMenu(false)}    
                >
                    Top Tìm kiếm</Link>
            </li>
            <li>
                <Link 
                    to="/about" 
                    className='text-blue-500'
                    onClick={() => setShowMenu(false)}    
                >
                    Thông tin Nhà Phát triển</Link>
            </li>
        </ul>
        </div>

        menuMarks = <div 
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setShowMenu(false)}    
        >

        </div>
    }
    // className="bg-black fixed top-0 left-0 h-full z-50"
    
    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon = {faBars}
                    onClick={()=> setShowMenu(!showMenu)}
                />
            </span>     

            { menuMarks }
            { menu }
        </nav>
    )
}

export default Navigation

