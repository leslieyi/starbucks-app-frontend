import { Card, Image } from 'semantic-ui-react'
import { useState } from 'react'

function ShowOneDrink({ lmao, potato, makeCart }){
    const [isClicked, setIsClicked] = useState(false)
    function handleAddCart(){
        setIsClicked(!isClicked) 
        makeCart(lmao)
    } 

    
    return (
        <Card>
        <Image alt={"coffee"} src={lmao.url}/>
        <Card.Content>
            <Card.Header>{lmao.name}</Card.Header>
            <Card.Meta>Price: ${lmao.price}</Card.Meta>
            <Card.Meta>{lmao.calories}</Card.Meta>
            <Card.Description>
            Ingredients: {lmao.ingredients}
            </Card.Description>
        </Card.Content>
        <button onClick={handleAddCart}>Add to Cart</button>
    </Card>

    )
}

export default ShowOneDrink;