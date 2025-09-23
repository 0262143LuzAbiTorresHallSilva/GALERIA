import { useState , forwardRef, useImperativeHandle} from "react";


const Rate = forwardRef (({avisaCambio, index}, ref) => {
const starRate = [1,2,3,4,5]
const [rating, setRating] = useState(0)

useImperativeHandle(ref, ()=> (
    {resetear: ()=>{setRating(0)}}

))

const califica = (star) =>{
    setRating(star)
    avisaCambio(index, star) //ejecuta la funcion de 
}



    return (
        <>

            <div className="card">
                <div className = "star">
                    {starRate.map((star,i) => (
                        <span className = {star <= rating ? "active" : "inactive"} key ={i} >< a onClick = {() => califica(star)} >{'\u2605'} </a> </span>
                    ))}
                </div>
            </div>

        </>
    )
})


export default Rate
