import { Card, Image } from "semantic-ui-react";
import { useState } from "react";

function ShowOneDrink({ lmao, user }) {
  //   const [isClicked, setIsClicked] = useState(false);
  //   function handleAddCart() {
  //     setIsClicked(!isClicked);
  //     makeCart(lmao);
  //   }

  // function warning(){
  //   alert("please log in to continue our amazing service")
  // }
  
  console.log(lmao.id)
  console.log(user)
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
      });
  }

  return (
    // <div class="ui centered card">

    <Card>
      <Image alt={"coffee"} src={lmao.url} />
      <Card.Content>
        <Card.Header>{lmao.name}</Card.Header>
        <Card.Meta>Price: ${lmao.price}</Card.Meta>
        <Card.Meta>{lmao.calories}</Card.Meta>
        <Card.Description>Ingredients: {lmao.ingredients}</Card.Description>
      </Card.Content>

      <button onClick={() => submitOrder(lmao)}>Submit Order</button>

      {/* <button onClick={handleAddCart}>Add to Cart</button> */}

      {/* //  <button onClick={warning}>Add to Cart</button> */}
    </Card>
    // </div>
  );
}

export default ShowOneDrink;
