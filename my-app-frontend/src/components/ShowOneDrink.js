import { Card, Image } from "semantic-ui-react";
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ShowOneDrink({ lmao, user }) {
  const [count, setCount] = useState(0);
  function submitOrder(drink) {
    let data = { customer_id: user.id, drink_id: drink.id };

    fetch("http://localhost:9292/create_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setCount((count => {
          return  count + 1
       }))
      });
    //   setCount((count => {
    //     return  count + 1
    //  }))
  }

  return (
    <div class="ui centered card"  style={{marginTop:"90px", marginLeft:"43%"}}>

    <Card >
      <Image alt={"coffee"} src={lmao.url} />
      <Card.Content>
        <Card.Header>{lmao.name}</Card.Header>
        <Card.Meta>Price: ${lmao.price}</Card.Meta>
        <Card.Meta>{lmao.calories}</Card.Meta>
        <Card.Description>Ingredients: {lmao.ingredients}</Card.Description>
      </Card.Content>

      {user? 
        <button onClick={() => submitOrder(lmao)}>{count} {lmao.name} Ordered</button> :  <Link to="/login">
        
        <button>Please Log In to Add to Cart</button> 
        </Link>

      }
    </Card>
    </div>
  );
}

export default ShowOneDrink;
