import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"

const Navbar = ()=> {
    const [active, setActive] = useState("")
    return(
        <nav className="w-full flex items-center py-1 top-0 z-20 bg-ihsan-blue sticky">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => {
                    setActive("");
                    window.scrollTo(0,0);
                }}>
                    <img src={logo} alt="logo" className="w-14 h-14 object-contain"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer hidden lg:flex">Ihsan Mahmood</p>
                </Link>
                <Link to="/">
                    <p className="text-white flex items-center gap-2">Home</p>
                </Link>
                <Link to="/skills">
                    <p className="text-white flex items-center gap-2">Skills</p>
                </Link>
                <Link to="/projects">
                    <p className="text-white flex items-center gap-2">Projects</p>
                </Link>
                <Link to="/contact">
                <p className="text-white flex items-center gap-2 px-2 ">Lets connect!</p>
                </Link>

            </div>

        </nav>
    )

}

export default Navbar 