import React from "react";
import { useParams } from "react-router-dom";

function ViewNote() {
  const { id }: { id: string } = useParams();

  return (
    <div>
      <h1>Vew Note: {id}</h1>
    </div>
  );
}

export default ViewNote;
