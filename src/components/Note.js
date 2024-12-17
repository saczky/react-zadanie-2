import { useState } from "react";
import EditButton from "../images/editButton.svg";
import DeleteButton from "../images/deleteButton.svg";
import Modal from "./Modal";

const Note = ({ title, description, deleteNote }) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentDescription, setCurrentDescription] = useState(description);
  const toggleVisibility = () => {
    setShow(!show);
  };

  const editNote = (title, description) => {
    setCurrentTitle(title);
    setCurrentDescription(description);
    setShowModal(false);
  };

  return (
    <div className="relative mt-4 mb-4 bg-green-100 rounded-3xl w-5/6 h-20 flex items-center justify-between m-1 p-1 pl-4">
      <div className="flex-grow text-left">
        <button
          className="flex-grow text-left hover:text-rose-600"
          onClick={toggleVisibility}
        >
          {currentTitle}
        </button>
        {show && <p className="font-extralight">{currentDescription}</p>}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="hover:text-indigo-500 mr-2 bg-white rounded-3xl h-10 w-10 flex items-center justify-center"
      >
        <img src={EditButton} alt="" />
      </button>

      <button
        className="hover:text-indigo-500 mr-2 bg-white rounded-3xl h-10 w-10 flex items-center justify-center"
        onClick={() => deleteNote()}
      >
        <img src={DeleteButton} alt="" />
      </button>

      <Modal
        active={showModal}
        currTitle={currentTitle}
        currDesc={currentDescription}
        onSave={(editTitle, editDesc) => editNote(editTitle, editDesc)}
      />
    </div>
  );
};

export default Note;
