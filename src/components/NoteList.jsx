import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({notes, onArchive, onDelete, keyword}) => {
	const activeNotes = notes
		.filter((note) => note.archived === false)
		.filter((note) => {
			return note.title.toLowerCase().includes(keyword.toLowerCase());
	});

	const archivedNotes = notes
	.filter((note) => note.archived === true)
	.filter((note)=>{
		return note.title.toLowerCase().includes(keyword.toLowerCase());
	});
	
	return (
		<>
			<h2>Catatan Aktif</h2>
			<div className="notes-list">
			{
				activeNotes.length > 0 ? (
					activeNotes.map((note) => (
						<NoteItem 
							key={note.id}
							onArchive={onArchive}
							onDelete={onDelete}
							{...note}/>
					))
				):(
					<p className="notes-list__empty-message">Tidak ada catatan {keyword}</p>
				)
			}
			</div>

			<h2>Arsip</h2>
			<div className="notes-list">
			{
				archivedNotes.length > 0 ? (
					archivedNotes.map((note) => (
						<NoteItem 
							key={note.id} 
							onArchive={onArchive}
							onDelete={onDelete}
							{...note}/>
					))
				):(
					<p className="notes-list__empty-message">Tidak ada catatan {keyword}</p>
				)
			}
			</div>
		</>
	);
}
export default NoteList;