import React, { useState } from "react";

import { Switch, Route, Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import NewProductForm from "../../components/NewProductForm";
import UsersList from "../../components/UsersList";
import ProductsList from "../../components/ProductsList";
import ProductDetail from "../../components/ProductDetail";
import { ADD_PRODUCT, GET_ALL_PRODUCTS, EDIT_PRODUCT } from "../../store/productsReducer";
import { GET_USERS, DELETE_USER, TOGGLE_ADMIN } from "../../store/usersReducer";

const Admin = function () {
  const dispatch = useDispatch();

  const history = useHistory();
  const user = useSelector((store) => store.users.currentUser);

  const users = useSelector((state) => state.users.users);
  const products = useSelector((state) => state.products.products);

  const [edit, setEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("isAdmin en adminContainer", user.isAdmin);

  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    price: 0,
    stock: 0,
    seasonal: false,
    description: "",
    id: 0
  });

  React.useEffect(()=>{
    dispatch(GET_ALL_PRODUCTS())
  }, [dispatch])

  const handleChange = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name;
    setProduct({ ...product, [fieldName]: value });
  };

  const toggleAdmin = (userId) => {
    dispatch(TOGGLE_ADMIN(userId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name && !product.category && !product.price) {
      setErrorMessage("Completar todos los campos obligatorios");
    }
    dispatch(ADD_PRODUCT(product));
    clearState();
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

  const handleEdit = (e)=>{
    e.preventDefault()
    console.log("PRODUCT FORM",product)
    // dispatch(EDIT_PRODUCT(product))
  }

  return (
    <div>
      {user.isAdmin ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-8">
              Admin
            </h1>
            <div className="space-x-5">
              <Link to="/admin/products">
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
                  onClick={() => dispatch(GET_USERS(user.id))}
                  class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Editar Usuarios
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-8">
              <div className="col-auto">
                <Route
                  path="/admin/products"
                  render={() => <ProductsList products={products} />}
                />
              </div>
              <div className="col-start-2 col-span-8">
                <Route
                  path="/admin/products/:id"
                  render={({ match }) => {
                    return (

                      <>
                      <ProductDetail isAdmin={user.isAdmin} productId={match.params.id} />
                      <NewProductForm handleChange={handleChange} handleSubmit={handleEdit} productId={match.params.id}/>
                      </>

                    );
                  }}
                />
              </div>
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
                toggleAdmin={toggleAdmin}

              />
            )}/>

            </Switch>
          </div>
        </section>
      ) : (
        history.push("/home")
      )}
    </div>
  );
};

export default Admin;
