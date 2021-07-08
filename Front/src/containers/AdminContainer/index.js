import React, { useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewProductForm from "../../components/NewProductForm";
import UsersList from "../../components/UsersList";
import ProductsList from "../../components/ProductsList";
import ProductDetail from "../../components/ProductDetail";
import OrdersContainer from "../OrdersContainer";
import { GET_USERS, DELETE_USER, TOGGLE_ADMIN } from "../../store/usersReducer";
import {
  ADD_PRODUCT,
  GET_PRODUCT,
  SET_PRODUCT,
  GET_ALL_PRODUCTS,
  EDIT_PRODUCT,
} from "../../store/productsReducer";

const Admin = function () {
  const dispatch = useDispatch();

  const history = useHistory();
  const user = useSelector((store) => store.users.currentUser);

  const users = useSelector((state) => state.users.users);
  const products = useSelector((state) => state.products.products);

  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");

  // const [product, setProduct] = useState({});
  const product = useSelector((state) => state.products.currentProduct);

  React.useEffect(() => {
    dispatch(GET_ALL_PRODUCTS());
  }, [dispatch]);

  // React.useEffect(() => {
  //   dispatch(SET_PRODUCT(product));
  // }, [dispatch, product]);

  const getId = (productId) => {
    dispatch(EDIT_PRODUCT({ product: product, productId: productId }));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    const fieldName = e.target.name;
    dispatch(SET_PRODUCT({ ...product, [fieldName]: value }));
  };

  const toggleAdmin = (userId) => {
    dispatch(TOGGLE_ADMIN(userId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name && !product.category && !product.price) {
      setMessage("Completar todos los campos obligatorios");
    }
    dispatch(ADD_PRODUCT(product));
    setMessage("Producto agregado correctamente!");
    clearState();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!product.name && !product.category && !product.price) {
      setMessage("Completar todos los campos obligatorios");
    }
    setMessage("Producto editado correctamente!");
    clearState();
  };

  const setCurrentProduct = (productId) => {
    dispatch(GET_PRODUCT(productId));
  };

  const deleteUser = (userId) => {
    dispatch(DELETE_USER(userId));
  };

  const toggleEdit = () => {
    // if (edit) setEdit(false);
    // else setEdit(true);
    setEdit(!edit);
  };

  const clearState = () => {
    // setMessage("");
    dispatch(SET_PRODUCT({}));
  };

  return (
    <div>
      {user.isAdmin ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-32 py-24 mx-auto">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">Admin</h1>
            <div className="space-x-5">
              <Link to="/admin/products">
                <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Editar Productos
                </button>
              </Link>
              <Link to="/admin/add">
                <button
                  onClick={() => {
                    clearState();
                    setMessage("");
                  }}
                  class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Agregar Producto
                </button>
              </Link>

              <Link to="/admin/users">
                <button
                  onClick={() => dispatch(GET_USERS(user.id))}
                  class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Editar Usuarios
                </button>
              </Link>
              <Link to="/admin/orders">
                <button
                  onClick={() => dispatch(GET_USERS(user.id))}
                  class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Ordenes
                </button>
              </Link>
            </div>

            {/* RUTAS PARA EDITAR PRODUCTOS */}
            <div className="grid grid-cols-8">
              <div className="col-auto">
                <Route
                  path="/admin/products"
                  render={() => (
                    <ProductsList
                      products={products}
                      setCurrentProduct={setCurrentProduct}
                      setMessage={setMessage}
                    />
                  )}
                />
              </div>
              <div className="col-start-2 col-span-8">
                <Route
                  path="/admin/products/:id"
                  render={({ match }) => {
                    return (
                      <div className="flex flex-col">
                        <ProductDetail
                          isAdmin={user.isAdmin}
                          productId={match.params.id}
                        />
                        <NewProductForm
                          handleChange={handleChange}
                          handleSubmit={handleEdit}
                          productId={match.params.id}
                          product={product}
                          setCurrentProduct={setCurrentProduct}
                          getId={getId}
                          message={message}
                        />
                      </div>
                    );
                  }}
                />
              </div>
            </div>

            {/* RUTA PARA AGREGAR PRODUCTO */}
            <Route
              path="/admin/add"
              render={() => (
                <div className="mt-20 -ml-20">
                  <NewProductForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    product={product}
                    message={message}
                    setCurrentProduct={setCurrentProduct}
                  />
                </div>
              )}
            />

            {/* RUTA PARA EDITAR USUARIOS */}
            <Route
              path="/admin/users"
              render={() => (
                <UsersList
                  users={users}
                  deleteUser={deleteUser}
                  edit={edit}
                  toggleEdit={toggleEdit}
                  toggleAdmin={toggleAdmin}
                />
              )}
            />

            {/* RUTA PARA VER TODAS LAS ORDENES */}
            <Route path="/admin/orders" render={() => <OrdersContainer />} />
          </div>
        </section>
      ) : (
        history.push("/home")
      )}
    </div>
  );
};

export default Admin;
