import React from "react";
import NoteAction from "./NoteAction";
import NoteContent from "./NoteContent";

const NoteItem = ({id, title, createdAt, body, archived, onArchive,onDelete}) => {
	return (
		<div className="note-item">
      <NoteContent title={title} createdAt={createdAt} body={body} />
			<NoteAction id={id} archived={archived} onArchive={onArchive} onDelete={onDelete} />
		</div>
	);
}

export default NoteItem;