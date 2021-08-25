function RecentOrders({ ordersData, user }) {
    console.log(user)
    return (
        <div>
            {ordersData.map((order, index) => (
                <div class="order">
                    <h1>Order #{index + 1}</h1>
                    <div>Total: {order.total_price}</div>
                    <ol>{order.drinks.map(drink => <li>{drink.name}</li>)}</ol>
                </div>
            ))}
        </div>
    )
}

export default RecentOrders;