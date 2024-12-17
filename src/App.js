import "./App.css";
import Note from "./components/Note";
import { NOTES } from "./consts/data";
import { useState } from "react";

function App() {
  const [currentNotes, setCurrentNotes] = useState(NOTES);
  const deleteNote = (noteId) => {
    setCurrentNotes(currentNotes.filter((note) => note.id !== noteId));
  };
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="text-3xl bg-green-300 bg-opacity-60 h-auto w-1/3 rounded-2xl flex flex-col items-center justify-center p-4 pt-8 pb-8">
        {currentNotes.map((currentTitle, index) => (
          <Note
            key={currentTitle.id}
            id={currentTitle.id}
            title={currentTitle.title}
            description={currentTitle.description}
            deleteNote={() => deleteNote(currentTitle.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
