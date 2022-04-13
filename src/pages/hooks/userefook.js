import { useRef, useState ,useEffect} from "react"

const Userefhook=()=>{
    const [value,setvalue]=useState("")
    const changevalue=(event)=>{
        setvalue(event.target.value)
    }

    const count=useRef(0)

    useEffect(()=>{
        count.current = count.current + 1;
    },[])
    return(
        <div>
            <h1>{count.current}</h1>
            <input name="name" value={value} placeholder="enter the name" onChange={changevalue}></input>
        </div>
    )
}

export default Userefhook