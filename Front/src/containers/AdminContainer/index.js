import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewProductForm from "../../components/NewProductForm";
import UsersList from "../../components/UsersList";
import { ADD_PRODUCT } from "../../store/productsReducer";
import { GET_USERS, DELETE_USER } from "../../store/usersReducer";

const Admin = function () {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);
  const [edit, setEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    price: 0,
    stock: 0,
    seasonal: false,
    description: "",
  });

  const handleChange = (e) => {
    console.log(product);
    const value = e.target.value;
    const fieldName = e.target.name;
    setProduct({ ...product, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name && !product.category && !product.price) {
      console.log("entre aca");
      setErrorMessage("Completar todos los campos obligatorios");
    }
    dispatch(ADD_PRODUCT(product));
    clearState();
  };

  const deleteUser = (userId) => {
    dispatch(DELETE_USER(userId));
  };

  const toggleEdit = () => {
    if (edit) setEdit(false);
    else setEdit(true);
  };

  const clearState = () => {
    setErrorMessage("");
    setProduct({
      name: "",
      image: "",
      category: "",
      price: 0,
      stock: 0,
      seasonal: false,
      description: "",
    });
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">Admin</h1>
        <div className="space-x-5">
          <Link to="/admin/edit">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Editar Productos
            </button>
          </Link>
          <Link to="/admin/add">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Agregar Producto
            </button>
          </Link>
          <Link to="/admin/addCategory">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Agregar Categoria
            </button>
          </Link>
          <Link to="/admin/users">
            <button
              onClick={() => dispatch(GET_USERS())}
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Editar Usuarios
            </button>
          </Link>
        </div>
        <Switch>
          <Route
            path="/admin/add"
            render={() => (
              <NewProductForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errorMessage={errorMessage}
              />
            )}
          />
          <Route
            path="/admin/users"
            render={() => (
              <UsersList
                users={users}
                deleteUser={deleteUser}
                edit={edit}
                toggleEdit={toggleEdit}
              />
            )}
          />
        </Switch>
      </div>
    </section>
  );
};

export default Admin;
