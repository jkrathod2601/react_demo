import { useState } from "react";

const Form=()=>{

    const [formdata,setformdata]=useState({name:'',email:{}})

    const checkvalidation=(event)=>{
        event.preventDefault();
        if(formdata.name.length>0 && formdata.email.length>0){
            console.log(formdata)
        }else{
            return false
        }
    }

    const updatename=(event)=>{
       console.log(event.target.value)
       setformdata({
           ...formdata,
           name:event.target.value
       })
    }

    const updateemail=(event)=>{
        console.log(event.target.value)
        setformdata({
            ...formdata,
            email:event.target.value
        })
    }

    return(
        <div>
            <form>
                <input type="text" name="name" placeholder="Enter your name" onInput={updatename}/>
                <input type="email" name="email" placeholder="Enter your email" onInput={updateemail}/>
                <button onClick={checkvalidation}>Click here</button>
            </form>
        </div>
    )
}

export default Form;