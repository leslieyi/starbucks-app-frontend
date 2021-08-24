import {useState} from 'react'

function Drink ({drink}){
    const [isClicked, setIsClicked]=useState(false)
    

    function handleButton(){
        setIsClicked(!isClicked)
        //set state for cart functionality here with drink
    }
    return(
        <div className = 'drink-card' style={{borderStyle: 'solid'}}>
            <ul className = 'drink-ul'>
                <li style={{ color: 'black', fontWeight: 'bold' }}>{drink.name}</li>
                <li>{drink.size}</li>
                <li>{drink.price}</li>
                <button onClick = {()=> handleButton()}>{isClicked ? "Added!": "Add to cart"}</button>
                </ul>
        </div>
    )
}

export default Drink