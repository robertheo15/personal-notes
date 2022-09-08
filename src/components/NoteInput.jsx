import React from "react";

class NoteInput extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			title: '',
			body: '',
			maxChar: 50
		}
	
		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value.slice(0, this.state.maxChar)
			}
		});
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			}
		});
	}
	
	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addNote(this.state);
	}
 
	render() {
		return(
			<div className="note-input">
				<h2>Buat catatan</h2>
				<form onSubmit={this.onSubmitEventHandler}>
					<p className="note-input__title__char-limit"> 
						Sisa karakter: {this.state.maxChar - this.state.title.length}
					</p>
					<input 
						type="text"
						className="note-input__title" 
						id='title'
						placeholder="Ini adalah judul ..." 
						value={this.state.title} 
						onChange={this.onTitleChangeEventHandler} 			
						required/>
					<textarea 
						className="note-input__body" 
						id="body" 
						placeholder="Tuliskan catatanmu disini..."
						value={this.state.body} 
						onChange={this.onBodyChangeEventHandler} 
						required/>
					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}
export default NoteInput;