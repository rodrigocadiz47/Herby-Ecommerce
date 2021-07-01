import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { SET_CARD } from "../../store/cardReducer";

const ProductCard = function ({ product }) {

  const dispatch = useDispatch()
  const [amount, setAmount]= React.useState(Number)
  const card = useSelector((store)=> store.card)


  const handleCard = (product) => {
    dispatch(
      SET_CARD({ ...product, amount: parseInt(amount), preTotal: amount * product.price })
    );
  };


  React.useEffect(()=>{
    localStorage.setItem("CARD-STORAGE", JSON.stringify(card));
}, [card])

  const onChange= ({ target })=>{
    setAmount(target.value)
  }


  return (
    <div class={s.card}>
      <Link to={`/products/${product.id}`}>
        <div class={s["card-img"]}>
          <img alt="" src={product.image} />
        </div>
      </Link>
      <div class={s["card-content"]}>
        <h2 class={s["card-title"]}>{product.name}</h2>
        <p class={s["card-text"]}>{product.description}</p>
        <div class={s["card-bottom"]}>
          <small>${product.price}</small>
          <input
            onChange={onChange}
            defaultValue="1kg"
            type="number"
            style={{ width: "50px" }}
            min="0"
            max="10"
            pattern="^[0-9]+"
          />
          kg
          <button onClick={() => handleCard(product)}>+ ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
