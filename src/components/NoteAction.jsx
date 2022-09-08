import React from "react";

const NoteAction = ({id, archived, onArchive, onDelete}) => {
	return (
		<div className="note-item__action">
			<button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
		{	
			archived === false ? (
				<button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>
			) : (
				<button className="note-item__archive-button" onClick={() => onArchive(id)}>Pindahkan</button>
			)
		}
		</div>
	);
}

export default NoteAction;