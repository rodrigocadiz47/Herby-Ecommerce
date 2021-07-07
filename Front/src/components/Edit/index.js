const Edit = function ({ edit, toggleEdit, fieldToEdit }) {
  return (
    <div>
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
    </div>
  );
};

export default Edit;
