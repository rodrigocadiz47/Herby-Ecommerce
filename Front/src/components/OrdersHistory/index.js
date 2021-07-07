import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GET_HISTORY } from "../../store/usersReducer";

const OrdersHistory = function () {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users.currentUser);
  const ordersHistory = useSelector((store) => store.users.ordersHistory);

  useEffect(() => {
    dispatch(GET_HISTORY(user.id));
    console.log("ordersHistory", ordersHistory);
  }, [dispatch, user]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-40 py-24 mx-auto">
        <h1 className="font-lora text-gray-900 text-3xl title-font font-medium mb-8">
          Mis Ordenes
        </h1>

        {ordersHistory &&
          ordersHistory.map((purchaseOrder) => {
            return (
              <div className="my-5">
                <div className="flex flex-row justify-between bg-white rounded p-4 border">
                  <div>
                    <h2>Order ID: {purchaseOrder.id}</h2>
                    <p>Order time: {purchaseOrder.createdAt.substring(0, 10)}</p>
                  </div>
                  <p className="text-xl">${purchaseOrder.total}</p>
                </div>
                <div>
                  {purchaseOrder.orders.map((order) => {
                    return (
                      <div className="flex flex-row justify-between bg-gray-100 rounded p-4 border">
                        <div>
                          <p>{order.product.name}</p>
                          <img
                            alt=""
                            src={order.product.image}
                            className="h-16 w-20 object-cover rounded border my-2"
                          ></img>
                        </div>
                        <p className="text-md">${order.product.price}</p>
                        {/* {order.product.map((product) => {
                        <p>{product.name}</p>;
                      })} */}
                        {console.log(order.product)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default OrdersHistory;
