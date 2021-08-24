import Drink from './Drink'

function MainContainer({data}) {
    
    return( 
        <div className = 'drink-container'>
            <h1>All available drinks! Pick something!</h1>
        {data.map(drink => {
           return <Drink drink= {drink} key ={drink.id}/>
        })}
        </div>
    )
}

export default MainContainer