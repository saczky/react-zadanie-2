import { createPortal } from "react-dom";
import { useState } from "react";

const Modal = ({ active, currTitle, currDesc, onSave }) => {
  const [editTitle, setEditTitle] = useState(currTitle);
  const [editDesc, setEditDesc] = useState(currDesc);
  return (
    active &&
    createPortal(
      <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center">
        <div className="flex flex-col bg-green-200 border-2 border-black rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Edycja notatki
          </h2>
          <form className="flex flex-col gap-2">
            <label htmlFor="title">Tytul:</label>
            <input
              className="py-1 px-2 bg-white rounded-md"
              id="title"
              name="title"
              type="text"
              value={editTitle}
              onChange={(event) => setEditTitle(event.target.value)}
            />
            <label htmlFor="description">Opis:</label>
            <input
              className="py-1 px-2 bg-white rounded-md"
              id="description"
              name="description"
              type="text"
              value={editDesc}
              onChange={(event) => setEditDesc(event.target.value)}
            />
            <button
              onClick={() => onSave(editTitle, editDesc)}
              type="button"
              className="mt-2 py-2 px-4 bg-white rounded hover:text-indigo-700 transition"
            >
              Zapisz
            </button>
          </form>
        </div>
      </div>,
      document.body
    )
  );
};

export default Modal;
