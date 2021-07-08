import React from "react";
// import axios from "axios";

import s from "./style.module.css";

const NewProductForm = ({
  handleChange,
  handleSubmit,
  message,
  productId,
  product,
  getId,
}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-5 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-5/6 px-12 py-10 mx-20 bg-gray-100 rounded-md shadow-xl "
        >
          {productId && (
            <div>
              <label className={s.label}>ID:</label>
              <input className={s.input} name="id" disabled value={product.id}></input>
            </div>
          )}
          <div>
            <label className={s.label}>Nombre*:</label>
            <input
              className={s.input}
              onChange={handleChange}
              name="name"
              placeholder="ej. Zapallo"
              defaultValue={product.name}
              value={product.name}
            />
          </div>
          <div>
            <label className={s.label}>Imagen (link):</label>
            <input
              className={s.input}
              onChange={handleChange}
              name="image"
              placeholder="ej. https://img.com"
              defaultValue={product.image}
              value={product.image}
            />
          </div>
          <div>
            <label className={s.label}>Categoria*:</label>
            <select
              className={s.input}
              onChange={handleChange}
              name="category"
              defaultValue={product.category || "default"}
              value={product.category || "default"}
            >
              {/* <option selected>{product.category}</option> */}
              <option value="default" disabled hidden>
                Seleccionar
              </option>
              <option value="fruit">Fruta</option>
              <option value="veg">Verdura</option>
            </select>
          </div>
          <div>
            <label className={s.label}>Precio*:</label>
            <input
              className={s.input}
              onChange={handleChange}
              name="price"
              placeholder="ej. 150"
              defaultValue={product.price}
              value={product.price}
            />
          </div>
          <div>
            <label className={s.label}>Stock (in Kg):</label>
            <span className="flex">
              <input
                className={s.input}
                onChange={handleChange}
                name="stock"
                placeholder="ej. 150"
                defaultValue={product.stock}
                value={product.stock}
              />
            </span>
          </div>
          <div>
            <label className={s.label}>De temporada:</label>
            <select
              className={s.input}
              onChange={handleChange}
              name="seasonal"
              defaultValue={product.seasonal || "default"}
              value={product.seasonal || "default"}
            >
              {/* <option defaultValue={product.seasonal} selected>
                {product.seasonal ? "Si" : "No"}
              </option> */}
              <option value="default" disabled hidden>
                Seleccionar
              </option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className={s.label}>Descripcion:</label>
            <textarea
              className={s.input}
              onChange={handleChange}
              name="description"
              placeholder="ej. Detalles del producto"
              defaultValue={product.description}
              value={product.description}
            />
          </div>
          <div>
            <p className="pb-2z`">{message}</p>
            {getId ? (
              <button
                className="text-white bg-blue-500 border-0 py-2 px-6 m-1.5 focus:outline-none hover:bg-blue-600 rounded text-lg"
                type="submit"
                onClick={() => getId(product.id)}
              >
                {!productId ? "Agregar" : "Editar"}
              </button>
            ) : (
              <button
                className="text-white bg-blue-500 border-0 py-2 px-6 m-1.5 focus:outline-none hover:bg-blue-600 rounded text-lg"
                type="submit"
              >
                {!productId ? "Agregar" : "Editar"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewProductForm;
