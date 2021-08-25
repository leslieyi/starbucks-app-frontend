import Drink from './Drink'
import { Header } from "semantic-ui-react";


function MainContainer({data}) {
    
    return( 
        <div className = 'drink-container'>
            <Header as="h3" style={{textAlign: "center"}}>All available drinks! Pick something!</Header>
        {data.map(drink => {
           return <Drink drink= {drink} key ={drink.id}/>
        })}
        </div>
    )
}

export default MainContainer