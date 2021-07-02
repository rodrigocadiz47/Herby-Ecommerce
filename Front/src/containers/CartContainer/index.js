import React from "react";
import { useSelector } from "react-redux";

export default function CartContainer() {
  const cart = useSelector((store) => store.cart);
  const [total, setTotal] = React.useState(Number);

  const memorizedCart = React.useMemo(() => {
    return cart.map((order) => {
      return (
        <tr>
          <th class="px-4 py-3">{order.name}</th>
          <th class="px-4 py-3">{order.amount} kg</th>
          <th class="px-4 py-3">${order.price}</th>
          <th class="px-4 py-3">${order.preTotal}</th>
          <td class="w-10 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </td>
        </tr>
      );
    });
  }, [cart]);

  React.useEffect(() => {
    console.log(cart);
    const pre = cart.map((product) => {
      return product.preTotal;
    });
    const toPay = cart.length && pre.reduce((a, b) => a + b);
    setTotal(toPay);
  }, [cart]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">Carrito</h1>
        {cart.length ? (
          <thead>
            <tr>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Producto
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Cantidad
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Precio
              </th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Total
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
            <button class="max-w-xs inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Comprar
            </button>
          </div>
        )}
        <div className="lg:w-4/5 mx-auto flex flex-wrap"></div>
      </div>
    </section>
  );
}
