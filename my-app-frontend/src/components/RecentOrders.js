import RenderRecentOrders from './RenderRecentOrders'
import { useState, useEffect } from "react";
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

  return (
  
  <div class="ui centered card"  style={{marginLeft:"43%"}}>

    {ordersData.map((order, index) => {
      return <RenderRecentOrders key={order.id} order={order} index={index} setOrdersData={setOrdersData} ordersData={ordersData} />
    })}

  </div>
  );
}

export default RecentOrders;
