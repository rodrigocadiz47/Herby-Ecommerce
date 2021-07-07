import React, {useMemo} from "react";


const UsersList = function ({ users, deleteUser, edit, toggleEdit, toggleAdmin }) {

  const memorizedUsers = useMemo(()=>{
    return users.map((user) => (
      <div key={user.id} className="grid grid-cols-6 space-x-2 mr-28">
        <p>{user.firstName + " " + user.lastName}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address}</p>
        {user.isAdmin ? <p>Admin</p> : <p>Normal</p>}
        {edit && (
          <div>
            {/* <select>
              <option>normal</option>
              <option>admin</option>
            </select> */}
            <button onClick={()=>toggleAdmin(user.id)}>{user.isAdmin ? "Quitar Admin" : "Dar Admin"}</button>
          </div>
        )}
        <span className="flex space-x-4 pl-12 text-gray-600">
          {edit && (
            <button onClick={toggleEdit} className="bg-blue-200 mx-2">
              Listo
            </button>
          )}
          {!edit && (
            <button>
              <svg
                onClick={toggleEdit}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current hover:text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          )}
          <button>
            <svg
              onClick={() => deleteUser(user.id)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    ))
  }, [users, edit, toggleEdit, toggleAdmin, deleteUser])
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-6 space-x-2 mr-28">
          <p>Nombre completo</p>
          <p>Email</p>
          <p>Telefono</p>
          <p>Direccion</p>
          <p>Privilegios</p>
        </div>
        {users.length ? memorizedUsers : <small>No hay usuarios regitrados aún</small>}
      </div>
    </section>
  );
};

export default UsersList;
