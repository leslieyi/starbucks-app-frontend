import { useParams } from 'react-router-dom'
import ShowOneDrink from './ShowOneDrink'


function ShowDrinks({data, makeCart, user }){
    const { id } = useParams();
    const potato = data.filter((item) => item.id === parseInt(id))
    
    return (
        <>
       {potato.map((lmao) => {
    return <ShowOneDrink key={lmao.id} potato={potato} lmao={lmao} makeCart={makeCart} user={user} />})}
    
        </>
    )}

export default ShowDrinks;