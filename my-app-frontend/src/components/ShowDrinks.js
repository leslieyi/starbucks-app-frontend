import { useParams } from 'react-router-dom'
import ShowOneDrink from './ShowOneDrink'


function ShowDrinks({data, makeCart}){
    const { id } = useParams();
    const potato = data.filter((item) => item.id === parseInt(id))
    
    // lmao ? 
    return (
        <>
       {potato.map((lmao) => {
    return <ShowOneDrink key={lmao.id} potato={potato} lmao={lmao} makeCart={makeCart}/>})}
       
    {/* // :
    // null; */}
        </>
    )}

export default ShowDrinks;