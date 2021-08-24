import { Card, Image } from 'semantic-ui-react'
const axios = require('axios');


function Cart({ cartDrinks, setCartDrinks }) {

    function removeFromCart(id) {
        const newArr = cartDrinks.filter(drink =>{ 
            return drink.id !== id
        })
        // setCartDrinks(newArr)
    }

    return (
        <>
        <h1>TOTAL:</h1>
            {cartDrinks.map(lmao => {
                return (
                    <Card key={lmao.id}>
                        <Image alt={"drinksss"} src={lmao.url} />
                        <Card.Content>
                            <Card.Header>{lmao.name}</Card.Header>
                            <Card.Meta>Price: ${lmao.price}</Card.Meta>
                        </Card.Content>
                        <button onClick={removeFromCart(lmao.id)}>Remove from cart</button>
                    </Card>
                )
            }

            )}

        </>
    )
}

export default Cart;