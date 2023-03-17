import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"

const Navbar = ()=> {
    const [active, setActive] = useState("")
    return(
        <nav className="w-full flex items-center py-1 fixed top-0 z-20 bg-ihsan-blue">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => {
                    setActive("");
                    window.scrollTo(0,0);
                }}>
                    <img src={logo} alt="logo" className="w-14 h-14 object-contain"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer">Ihsan Mahmood</p>
                </Link>
                <p className="flex items-center gap-2">Home</p>
                

            </div>

        </nav>
    )

}

export default Navbar 