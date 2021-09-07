import React from "react";
import { useHistory } from "react-router-dom";
import { noteItem } from "../interfaces";
import ListItem from "./ListItem";

interface Props {
  data: noteItem[];
}

function NotesList({ data }: Props): JSX.Element {
  const history = useHistory();

  const handleNoteClick = (id: number): void => {
    history.push(`/note/${id}`);
  };

  return (
    <>
      {data.map(({ id, title, text, date }) => (
        <div className="bg-gray-700" onClick={() => handleNoteClick(id)}>
          <ListItem key={id} id={id} title={title} text={text} date={date} />
        </div>
      ))}
    </>
  );
}

export default NotesList;
