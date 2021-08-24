import { Link } from "react-router-dom";

function Drink ({drink}){
    return(
        <div className = 'drink-card' >
            <ul className = 'drink-ul'>
                
                
                <Link to={`drinks/${drink.id}`}>
                <img alt={"drinks"} className = 'card-img' src={drink.url}/>
                <li style={{ color: 'black', fontWeight: 'bold' }}>{drink.name}</li>
                </Link>
                </ul>
        </div>
    )
}

export default Drink