import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { EDIT_AMOUNT } from "../../store/cartReducer";

export default function OptionQuantity({ amount, productId }){
    const user = useSelector(store=>store.users.currentUser)
    const dispatch= useDispatch()

    const handleChange=({target})=>{
        const newQuantity = parseFloat(target.value)
        dispatch(EDIT_AMOUNT({productId, newQuantity}))
    }

    const quantity = [0, 0.5, 1, 1.5, 2, 2.5, 3];

    return(
    <select onClick={handleChange}>
        <option selected hidden>{amount} kg</option>
    {quantity.map(number=>{
        return <option>{number} kg</option>
    })} 
    </select>)
}