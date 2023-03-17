import React from "react";
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiGit, DiReact, DiNpm, DiNodejs} from "react-icons/di"

const Skills = ()=>{

    const htmlpercent = {
        width:"85%"
    }
    const csspercent = {
        width:"55%"
    }
    const bootstrappercent = {
        width:"77%"
    }
    const jspercent = {
        width:"60%"
    }
    const reactpercent = {
        width:"30%"
    }
    
    
    return(
        <div className="flex flex-wrap py-5">
            <div className="w-full lg:w-1/2">
                <p className="text-white">html</p> 
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={htmlpercent}> 
                    </div>
                </div>

                <p className="text-white">css</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={csspercent}> 
                    </div>
                </div>

                <p className="text-white">bootstrap</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={bootstrappercent}> 
                    </div>
                </div>

                <p className="text-white">javascript</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={jspercent}> 
                    </div>
                </div>

                <p className="text-white">react</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={reactpercent}> 
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <p className="text-white text-center py-5">my tech stack</p>
                <div className="w-full flex flex-wrap justify-between">
                    <DiHtml5 className="text-6xl hover:fill-orange-500 hover:cursor-pointer" onClick={()=>window.open("https://html.com/html5/", "_blank")}/>
                    <DiCss3 className="text-6xl hover:fill-blue-600 hover:cursor-pointer" onClick={()=>window.open("https://www.w3schools.com/css/", "_blank")}/>
                    <DiJavascript className="text-6xl hover:fill-yellow-500 hover:cursor-pointer" onClick={()=>window.open("https://www.javascript.com/", "_blank")}/>
                    <DiBootstrap className="text-6xl hover:fill-purple-500 hover:cursor-pointer" onClick={()=>window.open("https://getbootstrap.com/", "_blank")}/>
                    <DiGit className="text-6xl hover:fill-orange-600 hover:cursor-pointer" onClick={()=>window.open("https://git-scm.com/", "_blank")}/>
                    <DiReact className="text-6xl hover:fill-blue-200 hover:cursor-pointer" onClick={()=>window.open("https://react.dev/", "_blank")}/>
                    <DiNpm className="text-6xl hover:fill-red-500 hover:cursor-pointer" onClick={()=>window.open("https://www.npmjs.com/", "_blank")}/>
                    <DiNodejs className="text-6xl hover:fill-green-500 hover:cursor-pointer" onClick={()=>window.open("https://nodejs.org/en", "_blank")}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills