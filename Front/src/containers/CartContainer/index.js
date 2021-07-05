import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ITEM } from "../../store/cartReducer";
import { CHECKOUT } from "../../store/cartReducer";

import AddRemoveIcons from "../../components/AddRemoveIcons";
import axios from "axios";

export default function CartContainer() {
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(REMOVE_ITEM(productId));
  };
  const cart = useSelector((store) => store.cart);
  const user = useSelector(store=>store.users.currentUser)
  const [total, setTotal] = React.useState(Number);

  const memorizedCart = React.useMemo(() => {
    return cart.map((order) => {
      return (
        <tr>
          <th className="px-4 py-3">{order.name}</th>
          <th className="px-4 py-3">{order.amount} kg</th>
          <th className="px-4 py-3">${order.price}</th>
          <th className="px-4 py-3">${order.preTotal}</th>
          <td className="w-10 text-center">

            <AddRemoveIcons handleRemove={()=>handleRemove(order)}/>

          </td>
        </tr>
      );
    });
  }, [cart, handleRemove]);

  React.useEffect(() => {
    console.log(cart);
    const pre = cart.map((product) => {
      return product.preTotal;
    });
    const toPay = cart.length && pre.reduce((a, b) => a + b);
    setTotal(toPay);
  }, [cart]);

  const handleCheckout= ()=>{
    dispatch(CHECKOUT())
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">
          Carrito
        </h1>
        {cart.length ? (
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Producto
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Cantidad
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Precio
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Sub-Total
              </th>
            </tr>
            {memorizedCart}
          </thead>
        ) : (
          <p className="leading-relaxed">Aun no hay nada en el carrito</p>
        )}
        {cart.length && (
          <div className="flex flex-col">
            <span className="px-4 py-8 title-font font-medium text-xl text-gray-900">
              Total = ${total}
            </span>
            <button className="max-w-xs inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={handleCheckout}>
              Comprar
            </button>
          </div>
        )}
        <div className="lg:w-4/5 mx-auto flex flex-wrap"></div>
      </div>
    </section>
  );
}
