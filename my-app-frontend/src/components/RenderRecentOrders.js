import axios from "axios";
import { Card, Image, Button} from "semantic-ui-react";

export default function RenderRecentOrders({
  order,
  index,
  setOrdersData,
  ordersData,
}) {
  function handleDelete(id) {
    console.log(id)
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

    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  marginTop: '50px', marginLeft: '40px', marginBottom: '40px',alignItems: 'center'}}>
         <Card>
          <Card.Header style={{textAlign: 'center', marginBottom: '5px'}} as="h2">Order #{index + 1}</Card.Header>
          <Card.Meta >
            
              {order.drinks.map((drink) => (
                <div className="ui container center aligned" key={Math.random()}>
                

                  <Image className="centered" alt={"coffee"} src={drink.url} />
                  <Card.Content >
                  <li>{drink.name}</li>
                  </Card.Content>


                  <Card.Meta >Total: {order.total_price}</Card.Meta>
                </div>
              ))}
           
            <Button style={{width:'100%' }}onClick={() => handleDelete(order.id)}>
              Delete Order History
            </Button>
          </Card.Meta>
        </Card>
    
        
    </div>
  );
}
