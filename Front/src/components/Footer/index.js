const Footer = function () {
  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="flex justify-around">
        <div className="col-span-3">
          <a href="/" title="Go to Kutty Home Page">
            <span className="font-lora text-xl text-gray-600">Herby</span>
            <span className="sr-only">Kutty Home Page</span>
          </a>
          <p className="my-4 text-xs leading-normal text-gray-500">
            Tu verduleria online
          </p>
        </div>
        <nav>
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Contacto
          </p>
          <p className="mb-3 text-sm text-gray-800">Atención Telefónica</p>
          <p className="mb-3 text-sm text-gray-800">Lunes a Viernes 9.30 a 17.30 hs.</p>
          <p className="mb-3 text-sm text-gray-800">T. 11 1234-5678</p>
          <p className="mb-3 text-sm text-gray-800">info@herby.com.ar</p>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Desarrolladores
          </p>
          <a href="/" className="flex mb-3 text-sm text-gray-800">
            Hernan Langer
          </a>
          <a href="/" className="flex mb-3 text-sm text-gray-800">
            Erika Zurhmule
          </a>
          <a href="/" className="flex mb-3 text-sm text-gray-800">
            Rodrigo Cadiz
          </a>
          <a href="/" className="flex mb-3 text-sm text-gray-800">
            Belen Buccolo
          </a>
          <a href="/" className="flex mb-3 text-sm text-gray-800">
            Yifei Zhu
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
