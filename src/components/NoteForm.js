import React, {Component} from 'react';
import '../css/Form.css';

export default class Form extends Component {
    state = {
        item_name: '',
        description: ''
    }

    handleSubmit = (event, props) => {
        event.preventDefault();
        fetch('http://localhost:3000/notes', {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
              'Accept': "application/json, text/plain, */*",
              "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then(data => {
            this.props.updateNotes([...this.props.state, data])
            this.setState({
                item_name: '',
                description: ''
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className='note-form' id='editNote'>
                <div className='inputs'>
                    <div className='item-name'>
                        <label htmlFor="item_name">Item Name:</label>
                        <input type='text' id='item_name' value={this.state.item_name} onChange={this.handleChange}/>
                    </div>
                    <div className='item-description'>
                        <label htmlFor="description">Description:</label>
                        <textarea form='editNote'id='description' value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                </div>
                <input type='submit' />
            </form>
        )
    }
}