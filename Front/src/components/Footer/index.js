const Footer = function () {
  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
        <div className="col-span-3">
          <a href="/" title="Go to Kutty Home Page">
            <span className="font-lora text-2xl">Herby</span>
            <span className="sr-only">Kutty Home Page</span>
          </a>
          <p className="my-4 text-xs leading-normal text-gray-500">
            Bring together your discussions, memberships, and content. Integrate a
            thriving community wherever your audience is, all under your own brand.
          </p>
        </div>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Product
          </p>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Features
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Integrations
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Documentation
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            FAQs
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Pricing
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            About
          </p>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Press-Kit
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Company
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Privacy
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Blog
          </a>
        </nav>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Contact
          </p>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Twitter
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Email
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Advertising
          </a>
          <a
            href="https://tailwindcss.com/resources"
            className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
          >
            Chat
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
