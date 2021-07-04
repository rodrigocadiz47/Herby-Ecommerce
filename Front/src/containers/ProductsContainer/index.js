import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsCard from "../../components/ProductsCard";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { POST_CART, SET_CART } from "../../store/cartReducer";


const ProductsContainer = function () {
  const dispatch = useDispatch();


  const [amount, setAmount] = React.useState(Number);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.users.currentUser);

  const handleCart = (product) => {
    if (user.firstName) {
      dispatch(
        POST_CART({
          ...product,
          amount: amount,
          preTotal: amount * product.price,
          userId: user.id,
        })
      );
    } else {
      dispatch(
        SET_CART({ ...product, amount: amount, preTotal: amount * product.price })
      );
    }
  };

  React.useEffect(() => {
    localStorage.setItem("CART-STORAGE", JSON.stringify(cart));
  }, [cart]);

  const onChange = ({ target }) => {
    const value = parseInt(target.value);
    setAmount(value);
  };

  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, [dispatch]);

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              product={product}
              handleCart={handleCart}
              onChange={onChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
