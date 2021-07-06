const NewProductForm = ({ handleChange, handleSubmit, errorMessage }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <p>{errorMessage}</p>
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label for="name" className="">
              Nombre*:
            </label>
            <input
              onChange={handleChange}
              className=""
              name="name"
              placeholder="ej. Zapallo"
            />
          </div>
          <div>
            <label for="image" className="">
              Imagen (link):
            </label>
            <input
              onChange={handleChange}
              className=""
              name="image"
              placeholder="ej. https://img.com"
            />
          </div>
          <div>
            <label for="category" className="">
              Categoria*:
            </label>
            <select onChange={handleChange} name="category">
              <option disabled selected>
                Seleccionar
              </option>
              <option value="fruit">Fruta</option>
              <option value="veg">Verdura</option>
            </select>
          </div>
          <div>
            <label for="price" className="">
              Precio*:
            </label>
            <input
              onChange={handleChange}
              className=""
              name="price"
              placeholder="ej. 150"
            />
          </div>
          <div>
            <label for="stock" className="">
              Stock:
            </label>
            <span className="flex">
              <input
                onChange={handleChange}
                className=""
                name="stock"
                placeholder="ej. 150"
              />
              <p>Kg</p>
            </span>
          </div>
          <div>
            <label for="seasonal" className="">
              De temporada:
            </label>
            <select onChange={handleChange} name="seasonal">
              <option disabled selected>
                Seleccionar
              </option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label for="description" className="">
              Descripcion:
            </label>
            <textarea
              onChange={handleChange}
              className=""
              name="description"
              placeholder="ej. Detalles del producto"
            />
          </div>
          <div>
            <button className="bg-blue-200" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewProductForm;
