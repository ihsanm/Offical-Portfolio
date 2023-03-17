import React from "react";
import { DiHtml5, DiCss3, DiBootstrap, DiJavascript, DiGit, DiReact} from "react-icons/di"

const Skills = ()=>{

    const htmlpercent = {
        width:"85%"
    }
    const csspercent = {
        width:"72%"
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
        <div className="flex flex-wrap">
            <div className="w-1/2">
                <p>html</p> 
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={htmlpercent}> 
                    </div>
                </div>

                <p>css</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={csspercent}> 
                    </div>
                </div>

                <p>bootstrap</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={bootstrappercent}> 
                    </div>
                </div>

                <p>javascript</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={jspercent}> 
                    </div>
                </div>

                <p>react</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={reactpercent}> 
                    </div>
                </div>
            </div>

            <div className="w-1/2">
                <p className="text-white text-center">my tech stack</p>
                <div className="w-full flex flex-wrap justify-between">
                    <DiHtml5 className="text-6xl"/>
                    <DiCss3 className="text-6xl"/>
                    <DiJavascript className="text-6xl"/>
                    <DiBootstrap className="text-6xl"/>
                    <DiGit className="text-6xl"/>
                    <DiReact className="text-6xl"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills