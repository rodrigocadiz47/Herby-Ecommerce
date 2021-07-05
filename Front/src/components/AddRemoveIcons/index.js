const AddRemoveIcons = function ({handleRemove}) {
  
  return (
    <span className="flex flex-row">
      {/* <button onClick={() => click(arg)} className="p-1">
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
      </button> */}
      <button onClick={handleRemove}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      </button>
    </span>
  );
};

export default AddRemoveIcons;