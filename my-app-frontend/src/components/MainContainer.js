import Drink from './Drink'

function MainContainer({data}) {
    
    return( 
        <div className = 'drink-container'>
        {data.map(drink => {
           return <Drink drink= {drink}/>
        })}
        </div>
    )
}

export default MainContainer