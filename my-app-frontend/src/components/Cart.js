import { Card, Image } from 'semantic-ui-react'


function Cart({ cartDrinks}) {


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
                        {/* <button onClick={removeFromCart(lmao.id)}>Remove from cart</button> */}
                    </Card>
                )
            }
            )}

        </>
    )
}

export default Cart;