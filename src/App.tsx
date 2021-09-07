import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/notes')
      .then(res => res.json())
      .then(data => {
        setListItems(data);
      })
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-3/4 max-w-[600px] text-white">
        <div className="bg-gray-800 py-8 pl-5">
          <h1 className='text-3xl'>Notes List</h1>
        </div>

        <NotesList data={listItems} />
      </div>
    </div>
  );
}

export default App;
