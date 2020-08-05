import React, {Component} from 'react';
import '../css/Form.css';

export default class Edit extends Component {
    state = {
        item_name: this.props.selectedNote.item_name,
        description: this.props.selectedNote.description,
        id: this.props.selectedNote._id
    }

    handleSubmit = (event, props) => {
        event.preventDefault();
        fetch(`http://localhost:3000/notes/${this.state.id}`, {
            body: JSON.stringify(this.state),
            method: "PUT",
            headers: {
              'Accept': "application/json, text/plain, */*",
              "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then(data => {
            this.props.reRenderNotes();
            this.props.goBack(undefined);
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='note-form' id='newNote'>
                    <div className='inputs'>
                        <div className='item-name'>
                            <label htmlFor="item_name">Item Name:</label>
                            <input id='item_name' value={this.state.item_name} onChange={this.handleChange}/>
                        </div>
                        <div className='item-description'>
                            <label htmlFor="description">Description:</label>
                            <textarea form='newNote' id='description' value={this.state.description} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <input type='submit' />
                </form>
                <button className='go-back' onClick={() => this.props.goBack(undefined)}>Go Back</button>
            </div>
        )
    }
}