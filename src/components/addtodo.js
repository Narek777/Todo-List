import {Component} from "react";
import React from "react";

/** Class representing an AddTodo. */
class AddTodo extends Component {
    /**
     * Create an AddTodo.
     * Bind Event Listeners
     */
    constructor(props) {

        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    /**
     * transfer FilterCHange event to an App
     * @param {string} e = input of "what is going to be done?"  value
     * */

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    /**
     * transfer FilterCHange event to an App
     * @param {class} event = input of "what is going to be done?"  value
     * */

    handleKeyUp(event) {
        this.props.onKeyUp(event);
    }

    /**
     * Rendering process
     *  Create input area for Application
     */

    render() {
        return (
            <input className='addTodo-input'
                   type="text"
                   placeholder='What needs to be done?'
                   value={this.props.filterText}
                   onChange={this.handleFilterTextChange}
                   onKeyUp={this.handleKeyUp}
                   autoFocus
            />

        )
    }
}
/**
 * A module that exports part of adding todoRaw in of our Application!
 * @exports AddTodo
 */
export default AddTodo;