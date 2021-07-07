import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const user = useSelector((store) => store.users.currentUser);
  console.log("CURRENT USER", user);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-40 py-24 mx-auto">
        {user.id ? (
          <div className="flex flex-col items-center">
            <h1 className="font-lora text-gray-700 text-3xl font-medium mb-8">
              {user.firstName}, gracias por tu compra!
            </h1>
            <Link to="/">
              <button class="my-5 mx-3 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Ir al inicio
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="font-lora text-gray-700 text-3xl font-medium mb-8">
              Necesitas loguearte primero!
            </h1>
            <Link to="/login">
              <button class="my-5 mx-3 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Loguearme
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
