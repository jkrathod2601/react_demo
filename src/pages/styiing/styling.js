import { withRouter } from "react-router-dom"
import "./main.css"


const Styling=()=>{

    let cssobject={
        backgroundColor:"green",
        border:"2px solid black"
    }

    return(
        <div>
            <h1 style={{backgroundColor:"red"}}>
                basic inline styling
            </h1>
            <br/>
            <h1 style={cssobject}>
                css object
            </h1>
            <br/>
            <h1 className="hello">
                external styling
            </h1>
        </div>
    )
}


export default Styling