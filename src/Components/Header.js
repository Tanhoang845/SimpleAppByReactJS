import React from "react";
import Navigation from './Navigation';


function Header(){
    return (
        <header class="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                TRANG WEB TUYỂN DỤNG
            </span>

            <Navigation />
        </header>
    )
}

export default Header

