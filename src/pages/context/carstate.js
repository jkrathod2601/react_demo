import Carcontext from "./carcontext";


const Carstate=(props)=>{
    const x={
        name:"jay rathod",
        email:"jkrathod2601@gmail.com"
    }
    return(
        <Carcontext.Provider  value={x}>
            {props.children}
        </Carcontext.Provider>
    )
}

export default Carstate