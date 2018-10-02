import {Component} from "react";
import React from "react";
import {emitter} from './emitter.js'
import SvgMarks from "./svg-marks";
import '../App.css';
/** Class representing an Filters. */
class Todo extends Component {
    /**
     * Create a Todo.
     * Bind Event Listeners
     * set default states for Todo
     */

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    /**
     *
     * @listens todoStatusChanged - change state inFInished on Click
     * */

    handleClick() {
        emitter.emit('todoStatusChanged', this.props.todo);
    }

    /**
     * Rendering process
     *  Create area of TodoRaw for Application
     */

    render() {

        let todo = this.props.todo;
        let liOpacity = !this.props.todo.status ? 'label_item' : 'label_item label_item--opacity';
        return (

            <div className='item flex alCen box-shadwow w100'>
                <SvgMarks  onhandleClick = {this.handleClick}
                           active = {todo.status}
                />
                <label  className= {liOpacity} >{todo.description}</label>
                <button className= 'btn btn1 remove_btn disp-none'
                        onClick={function (event) {
                        event.persist();
                        emitter.emit('todoRemove',todo);
                }}>X
                </button>
            </div>
        )

    }

}

/**
 * A module that exports part of todoRaws in of our Application!
 * @exports Todo
 */
export default Todo;
