import { useState } from "react"

const Usestate=()=>{
    const [x,setx]=useState(0)
    return (
        <div>
            <h2>
                this is value of {x}
            </h2>
            <button onClick={() => setx(x+1)}>
                click here to add 1
            </button>
            <button onClick={() => setx(x+2)}>
                click here to add 2
            </button>
        </div>
    )
}


export default Usestate