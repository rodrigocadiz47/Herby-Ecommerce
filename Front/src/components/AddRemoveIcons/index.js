const AddRemoveIcons = function ({ click, arg }) {
  return (
    <span className="flex flex-row">
      <button onClick={() => click(arg)} className="p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-gray-500 hover:text-green-600 active:text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button className="p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-gray-500 hover:text-green-600 active:text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </span>
  );
};

export default AddRemoveIcons;
