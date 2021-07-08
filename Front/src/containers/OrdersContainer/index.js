import { useState, useEffect } from "react";
import axios from "axios";

const OrdersContainer = function () {
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/purchaseOrders/admin").then((res) => {
      setPurchaseOrders(res.data);
    });
  }, [purchaseOrders]);

  return (
    <div className="">
      {purchaseOrders.length ? (
        purchaseOrders.map((order) => {
          return (
            <div key={order.id} className="my-16">
              <p>Nombre: {order.user.firstName}</p>
              <p>Direccion:{order.user.address}</p>
              <p>Telefono: {order.user.phone}</p>
              {order.orders.map((order) => {
                return (
                  <div key={order.id}>
                    <p>
                      {order.productQuantity} Kg {order.product.name}
                    </p>
                    <p>{order.name}</p>
                  </div>
                );
              })}
              <p>Total: {order.total}</p>
            </div>
          );
        })
      ) : (
        <p>No hay ordenes</p>
      )}
    </div>
  );
};

export default OrdersContainer;
