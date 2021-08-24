import {useState} from 'react'
import { Redirect, Link } from "react-router-dom";

function Drink ({drink}){
    const [isClicked, setIsClicked]=useState(false)
    

    // function handleButton(){
    //     // return <Redirect to={`drinks/${drink.id}`}/>
    //     setIsClicked(!isClicked)
    //     // isClicked ? 
    //     // <Redirect to={`drinks/${drink.id}`}/> : null
    //     //set state for cart functionality here with drink
    // }
    return(
        <div className = 'drink-card' style={{borderStyle: 'solid'}}>
            <ul className = 'drink-ul'>
                <li style={{ color: 'black', fontWeight: 'bold' }}>{drink.name}</li>
                
                <Link to={`drinks/${drink.id}`}>
                    <button>Pick Me!</button>
                </Link>
                </ul>
        </div>
    )
}

export default Drink