import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const LandingPage = function () {
  return (
    <div className="">
      <section className="">
        <div className="container mx-auto h-screen flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-center rounded"
              src="https://www.pnglib.com/wp-content/uploads/2021/02/sliced-raw-avocado-png_60224153158f3.png"
              alt=""
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="font-lora sm:text-8xl text-2xl mb-4 font-medium text-gray-600">
              HERBY
              <br className="hidden lg:inline-block"></br>
            </h2>
            <p className="mb-8 text-xl text-gray-700 leading-relaxed">
              Tienda online de frutas y verduras ecologicas. Desde 2010, nos hemos
              especializado en productos frescos, organicos y de calidad.
            </p>
            <div className="flex justify-center">
              <Link to="/products/fruit">
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Frutas
                </button>
              </Link>
              <Link to="/products/veg">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Verduras
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="px-24 py-20">
            <p className="text-xl leading-relaxed text-gray-500 mb-4">
              Nuestros proveedores son productores locales, en su mayoría pequeños
              agricultores ecológicos. Cuando no encontramos productores locales, de fruta
              en particular (plátano, kiwi, pera, manzana, etc.) el producto es siempre
              ecológico certificado.
            </p>
            <p className="text-xl leading-relaxed text-gray-500">
              Entregamos nuestros alimentos ecológicos en toda la ciudad y no tenemos
              pedido minimo. En CABA el transporte es gratuito para compras superiores a
              $1000 y te lo llevamos nosotros de martes a viernes. Fuera de nuestra zona
              de reparto, la entrega se realiza por una empresa de mensajería en 24h, lo
              que garantiza la frescura del producto.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://images.pexels.com/photos/4117544/pexels-photo-4117544.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="content"
                />
                {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 className="font-lora text-2xl text-gray-900 font-medium title-font mb-4">
                  100% Fresco
                </h2>
                <p className="leading-relaxed text-base">
                  Cosechamos las frutas y hortalizas el mismo día que el pedido llega a tu
                  domicilio. Los alimentos orgánicos son naturalmente más duraderos,
                  además, utilizamos vehículos acondicionados para preservar la calidad
                  durante su traslado.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 className="font-lora text-2xl text-gray-900 font-medium title-font mb-4">
                  100% Ecologico
                </h2>
                <p className="leading-relaxed text-base">
                  Descubrí el encanto original de los alimentos orgánicos: cultivados en
                  suelos sustentables y libres de aditivos en todo el ciclo productivo,
                  incluso desde la semilla. Las células compactas de cada producto
                  mantienen intactos su aroma y sabor.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 className="font-lora text-2xl text-gray-900 font-medium title-font mb-4">
                  100% Saludable
                </h2>
                <p className="leading-relaxed text-base">
                  Enriquecé tu alimentación con las propiedades y los nutrientes completos
                  de cada producto. Tu organismo comenzará a olvidarse de las alergias y
                  problemas digestivos que derivan de los agregados artificiales, usuales
                  en producciones convencionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
