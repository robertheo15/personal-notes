import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBody = ({notes, addNote, onArchive, onDelete, keyword}) => {
  return(
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <NoteList 
        notes={notes}
        onArchive={onArchive}
        onDelete={onDelete}
        keyword={keyword} />
    </div>
  );
}

export default NoteBody;