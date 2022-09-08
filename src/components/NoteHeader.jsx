import React from "react";

const NoteHeader = ({onSearch, keyword}) => {
	return(
		<div className="note-app__header">
			<h1>Notes</h1>
			<div className="note-search">
				<input 
					type="text" 
					placeholder="Cari catatan ..."
					onChange={onSearch}
					value={keyword}
				/>
			</div>
		</div>
	);
}

export default NoteHeader;