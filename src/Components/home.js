import React from "react";
import logo from "../assets/Logo.png"

const Home = ()=>{
    return(
        <section>
            <div className="container flex mx-auto items-center">

                <div className="lg:max-w-lg lg:w-full md:w-1 w-5/6">
                    <img src={logo} className=""/>
                </div>
                <div className="">
                    <h1 className="text-white px-5">Hi i'm Ihsan</h1>
                    <p className="text-white px-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                    </p>
                </div>
            </div>
            

        </section>
    )
}

export default Home