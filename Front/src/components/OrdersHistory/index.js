import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GET_HISTORY } from "../../store/usersReducer";

const OrdersHistory = function () {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users.currentUser);
  const ordersHistory = useSelector((store) => store.users.history);

  useEffect(() => {
    dispatch(GET_HISTORY(user.id));
  }, [dispatch, user]);

  return (
    <div>
      <h1>History</h1>
      {ordersHistory && ordersHistory.map((purchaseOrder) => (
        <p>{purchaseOrder.id}</p>
      ))}
    </div>
  );
};

export default OrdersHistory;