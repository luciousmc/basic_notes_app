import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import ViewNote from "./components/ViewNote";

function App() {
  const [listItems, setListItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3004/notes")
      .then((res) => res.json())
      .then((data) => {
        setListItems(data);
      });
  }, []);

  const handleHeaderClick = (): void => {
    history.push('/')
  }

  return (
    <Router>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 max-w-[600px] text-white">
          <div className="bg-gray-800 py-8 pl-5">
            <h1 className="text-3xl cursor-pointer" onClick={handleHeaderClick}>Notes List</h1>
          </div>
          <Switch>
            <Route path="/note/:id">
              <ViewNote />
            </Route>
            <Route path="/">
              <NotesList data={listItems} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
