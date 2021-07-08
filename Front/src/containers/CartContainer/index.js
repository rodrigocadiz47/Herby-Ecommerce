import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { REMOVE_ITEM, CHECKOUT } from "../../store/cartReducer";
import OptionQuantity from "../../components/OptionQuantity";
import AddRemoveIcons from "../../components/AddRemoveIcons";

export default function CartContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.users.currentUser);
  const [total, setTotal] = useState(Number);
  const [emptyCart, setEmptyCart] = useState(false);

  const memorizedCart = useMemo(() => {
    return cart.map((order) => {
      console.log("order", order);
      return {
        id: order.id,
        name: order.name,
        image: order.image,
        amount: order.amount,
        price: order.price,
        preTotal: order.preTotal,
      };
    });
  }, [cart]);

  useEffect(() => {
    const pre = cart.map((product) => {
      return product.preTotal;
    });
    const toPay = cart.length && pre.reduce((a, b) => a + b);
    setTotal(toPay);

    if (cart.length) setEmptyCart(false);
    else setEmptyCart(true);
  }, [cart]);

  const handleRemove = (productId) => {
    dispatch(REMOVE_ITEM(productId));
  };

  const handleCheckout = () => {
    if (user.id) {
      console.log("NO DEBERIA ENTRAR");
      dispatch(CHECKOUT()).then(() => {
        history.push("/congratulation");
      });
    } else {
      history.push("/congratulation");
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-40 py-24 mx-auto">
        <h1 className="font-lora text-gray-900 text-3xl font-medium mb-8">Carrito</h1>
        {emptyCart && (
          <p className="leading-relaxed text-lg">Aun no hay nada en el carrito</p>
        )}
        {!emptyCart && (
          <div>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-5 border font-lora rounded bg-white text-gray-600 text-lg">
                <div className="px-16 py-3">Producto</div>
                <div className="px-16 py-3">Cantidad</div>
                <div className="px-16 py-3">Precio</div>
                <div className="px-16 py-3">Subtotal</div>
                <div className=""></div>
              </div>
              {memorizedCart.map((order) => {
                return (
                  <div
                    key={order.id}
                    className="grid grid-cols-5 content-center border rounded  bg-gray-100"
                  >
                    <Link to={`/products/${order.id}`}>
                      <div className="px-16 py-3">
                        <p>{order.name}</p>
                      </div>
                    </Link>
                    <div className="px-16 py-3">
                      <OptionQuantity
                        amount={order.amount}
                        productId={order.id}
                        price={order.price}
                      />
                    </div>
                    <div className="px-16 py-3">${order.price}</div>
                    <div className="px-16 py-3">${order.preTotal}</div>
                    <div className="px-16 py-3 w-10 text-center">
                      <AddRemoveIcons handleRemove={() => handleRemove(order)} />
                    </div>
                  </div>
                );
              })}
              <div className="grid grid-cols-5 font-lora font-bold bg-white border rounded">
                <div className="px-16 py-3 text-lg">Total</div>
                <div></div>
                <div></div>
                <span className="px-16 py-3 text-lg">${total}</span>
                <div></div>
              </div>
              {/* <button
              className="max-w-xs inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={handleCheckout}
            >
              Comprar
            </button> */}
            </div>
            <Link to={`/home`}>
              <button className="my-10 mx-3 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Continuar pedido
              </button>
            </Link>
            <button
              onClick={handleCheckout}
              className="my-10 mx-3 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Comprar
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
