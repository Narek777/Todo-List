import React, {Component} from 'react';
import {TodoList} from "./todoList";
import TodoService from '../services/todo.service';

/** Class representing an Container of TodoList . */
export class TodoListContainer extends Component {
    /**
     * Create an App.
     */
    constructor( props ){
        super(props);
        this.state = {
            todos: []
        };
    }
    /**
     * Function is working when component has already Mounted
     * */
    componentDidMount(){
        this.updateState();
        this.updateOnChange();
    }

    updateOnChange(){
        let updateState = this.updateState.bind(this);

        TodoService.onChange(updateState);
        this.props.history.listen(updateState);
    }

    updateState(location){
        const method = this.getmethodFromRoute(location);
        let [ ...todos ] = method();
        this.setState({ todos });

    }
    /**
     * @param {Object} location
     * */
    getmethodFromRoute( location ){
        location = location || this.props.location;
        const path = location.pathname.toLowerCase();
        const methodMap = {
            '/':          TodoService.getAll.bind( TodoService ),
            '/completed': TodoService.getCompleted.bind( TodoService ),
            '/active':    TodoService.getActives.bind( TodoService ),
        };
        return methodMap[path];
    }

    render(){
        return (
            <TodoList todos={ this.state.todos }/>
        );
    }
}