import axios from "axios"

export default function RenderRecentOrders({ order, index, setOrdersData, ordersData}) {

    function handleDelete(id){
        axios.delete(`http://localhost:9292/orders/${id}`, {
          order_id: id
        })
        .then(setOrdersData(ordersData.filter(order =>{
            return order.id !== id
        })))
        .catch(error => console.log(error))
    }

    return (
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
    )
}