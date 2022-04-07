import Carcontext from "./carcontext"
import { useContext } from "react"

const About=()=>{
    const data=useContext(Carcontext)
    return (
        <div>
            <h1>
                this is about page<br></br>
                {data.name}<br></br>
                {data.email}
            </h1>
        </div>
    )
}

export default About