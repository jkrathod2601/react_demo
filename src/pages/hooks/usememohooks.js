import { useMemo, useState } from "react"

const Usememohook=()=>{

    const [number,setnumber]=useState(0)

    const addone=()=>{
        setnumber(number+1)
    }

    const addtwo=()=>{
        setnumber(number+2)
    }

    const even=useMemo(()=>{
        let i=0
        while(i<2000000000){
            i++
        }
        return number%2===0
    },[number])


    return(
        <div>
            <h1>
                {number}
            </h1>
            <h1>
                {even?"even":"odd"}
            </h1>
            <button onClick={addone}>Add 1</button>
            <button onClick={addtwo}>Add 2</button>
        </div>
    )    
}

export default Usememohook