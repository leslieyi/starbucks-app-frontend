import { useEffect, useState } from "react";
function RecentOrders({ user }) {
  const [ordersData, setOrdersData] = useState([]);
  console.log(ordersData);

  useEffect(() => {
    if (user) {
      // Everytime ruby needs to know who is logged in,
      // we need {credentials: "include"}
      fetch("http://localhost:9292/orders", { credentials: "include" })
        .then((r) => r.json())
        .then((data) => {
          setOrdersData(data);
        });
    }
  }, []);

  function handleDelete(id){
    
      fetch(`http://localhost:9292/orders/${id}`, {
        method: "DELETE",
        credentials: "include"
      }).then(resp => resp.json())
      .then(data => setOrdersData(data))
  }

  return (
    <div>
      {ordersData.map((order, index) => (
        <div class="order">
          <h1>Order #{index + 1}</h1>
          <div>Total: {order.total_price}</div>
          <ol>
            {order.drinks.map((drink) => (
              <li>{drink.name}</li>
            ))}
          </ol>
          <button onClick={()=>handleDelete(order.id)}>Delete Order History</button>
        </div>
      ))}
    </div>
  );
}

export default RecentOrders;
