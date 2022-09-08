import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			notes: getInitialData(),
			search: ''
		}
		
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
	}

	onSearchHandler(event) {
    this.setState((prevState) => {
      return {
				...prevState.notes,
				search: event.target.value
      }
    });			
  }

	onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
						archived: false,
						createdAt: +new Date(),
          }
        ]
      }
    });
  }

	onArchiveHandler(id) {
		const notes = this.state.notes;
		const archive = notes.findIndex(note => note.id === id);

		notes[archive].archived === true ? (notes[archive].archived = false) : notes[archive].archived = true;

		this.setState({ notes });
	}


	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	render(){
		return(
			<>
			<NoteHeader keyword={this.state.search} onSearch={this.onSearchHandler}/>
			<NoteBody 
				keyword={this.state.search}
				notes={this.state.notes} 
				addNote={this.onAddNoteHandler} 
				onArchive={this.onArchiveHandler}
				onDelete={this.onDeleteHandler}/>
			</>
		);
	}
}

export default NoteApp;