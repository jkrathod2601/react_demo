const Propsis=(props)=>{
    const {name,surname}=props

    props.givedata("helloworld")
    return(
        <div>
            <h1>
                This is prop<br/>
                this is {name} and surname is {surname}
            </h1>
        </div>
    )
}

export default Propsis