function RecentOrders({ ordersData, user }) {

    return (

        <div>
            {ordersData.map(order => {
                return order.drinks.map(drink => {

                    return (<h1>{drink.name}</h1>)

                })
            })}
        </div>
    )


}

export default RecentOrders;