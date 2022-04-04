import Propsis from "./propsis"

const Mainprop=()=>{

    const run=(data)=>{
        console.log(data)
    }
    return (
        <div>
            <Propsis name="jay" surname="rathod" givedata={run}/>
        </div>
    )
}

export default Mainprop