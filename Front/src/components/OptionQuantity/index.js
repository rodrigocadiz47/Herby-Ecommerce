import { useDispatch } from "react-redux";
import { EDIT_AMOUNT } from "../../store/cartReducer";

export default function OptionQuantity({ amount, productId }) {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const newQuantity = parseFloat(target.value);
    dispatch(EDIT_AMOUNT({ productId, newQuantity }));
  };

  const quantity = [0, 0.5, 1, 1.5, 2, 2.5, 3];

  return (
    <select onClick={handleChange}>
      <option selected hidden>
        {amount} kg
      </option>
      {quantity.map((index, number) => {
        return <option key={index}>{number} kg</option>;
      })}
    </select>
  );
}
