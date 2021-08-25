import axios from "axios";
import { Card, Image, Button} from "semantic-ui-react";

export default function RenderRecentOrders({
  order,
  index,
  setOrdersData,
  ordersData,
}) {
  function handleDelete(id) {
    axios
      .delete(`http://localhost:9292/orders/${id}`, {
        order_id: id,
      })
      .then(
        setOrdersData(
          ordersData.filter((order) => {
            return order.id !== id;
          })
        )
      )
      .catch((error) => console.log(error));
  }

  return (
    //   <div class="ui grid"> <div class="two wide column"> 
    <div class="ui container center aligned">
         <Card>
          <Card.Header floated='center' as="h2">Order #{index + 1}</Card.Header>
          <Card.Meta>
            
              {order.drinks.map((drink) => (
                <div class="ui container center aligned">
                

                  <Image class="centered" alt={"coffee"} src={drink.url} />
                  <Card.Content >
                  <li>{drink.name}</li>
                  </Card.Content>


                  <Card.Meta >Total: {order.total_price}</Card.Meta>
                </div>
              ))}
           
            <Button onClick={() => handleDelete(order.id)}>
              Delete Order History
            </Button>
          </Card.Meta>
        </Card>
        {/* </Card.Content> */}
        
    </div>
    // </div>
    // </div>
  );
}
