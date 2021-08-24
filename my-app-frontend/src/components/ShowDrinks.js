import { Route, Switch, Link} from 'react-router-dom';
import { useParams } from 'react-router-dom'

function ShowDrinks({data}){
    const { id } = useParams();

    // data.find((drink)=> drink.id === params.id)

    
    
    const lmao = data.find((item) => item.id === parseInt(id))

    return lmao ? (
        <>
        <h1>{lmao.name}</h1>
        <p>Price: ${lmao.price}</p>
        <p>{lmao.categories}</p>
        <p>Ingredients: {lmao.ingredients}</p>
        <p>{lmao.calories}</p>
        <img src={lmao.url}/>
        </>
    )
    :
    null;
}

export default ShowDrinks;