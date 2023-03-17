import React from "react";

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
        <div>
            <div>
                <p>html</p>
                <div class="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={htmlpercent}> 
                    </div>
                </div>

                <p>css</p>
                <div class="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={csspercent}> 
                    </div>
                </div>

                <p>bootstrap</p>
                <div class="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={bootstrappercent}> 
                    </div>
                </div>

                <p>javascript</p>
                <div class="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={jspercent}> 
                    </div>
                </div>
                <div class="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-percent-bar h-2.5 rounded-full" style={reactpercent}> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills