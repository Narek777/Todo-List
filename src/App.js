import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addtodo.js'
import Filters from './components/filters.js'
import { emitter } from './components/emitter.js'
import { Todo as TodoModel } from "./models";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoService from './services/todo.service';
import { TodoListContainer } from "./components/todoListContainer";




/*
* Creating React App
* import node modules
*
* */

/** Class representing an App. */
class App extends Component {

    /**
     * Create an App.
     * Bind Event Listeners
     *
     */

    constructor(props) {
        super(props);

        this.state = {
            /**
             *  @type{Array} - Array for DOM
             *  */
            todos: [],
            /**
             *  @type {Object} - Crates new TodoListModel
             *  */
            todoList: TodoService,
            /**
             * @type {string} - The Value of Addtodo input
             * */
            todoDescription: ''
        };






        /**
         * @type {!number} - representing type of this.x
         * */
        this.x = 0;
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleAllClick = this.handleAllClick.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
        emitter.addListener('todoRemove', this.todoRemoveHandler.bind(this));
        emitter.addListener('todoStatusChanged', this.todoisFinishedHandler.bind(this));

    }

    /**
     * TodoRaw status checker and changer
     * @param {Object} todo
     * */
    todoisFinishedHandler( todo ){
        console.log(todo)
        todo.changeStatus();
        this.state.todoList.setStorage();
        this.updateState();
    }
    /**
     * Updating state for render
     * @param todos - All TodoRaws
     * */
    updateState(todos = this.state.todos) {
        this.setState({todos});
    }


    /**
     * remove deleted rows
     * @param {Object} todo - Single TodoRaw
     * */

    todoRemoveHandler(todo) {
        const todoList = this.state.todoList;
        todoList.remove(todo);
        this.updateState(this.state.todoList.getClone());
    }


    /**
     *
     * adding new row on handling up enter key, then update and set properties of state;
     * @param {object} e - React standart SyntheticEvent initialized keyboardEvent ;
     *
     */

    handleKeyUp(e) {
        e.persist();
        window.e = e;
        if (e.keyCode === 13 && this.state.todoDescription.length > 0 && this.state.todoDescription.length < 25) {
            this.state.todoList.add( new TodoModel( {
                description: this.state.todoDescription,
                status: 0
            } ) );
            this.setState({
                todoDescription: ''
            });
        }

    }


    /**
     *
     * input what needs to be done.
     * @param {string} todoDescription - The filetText input value;
     *
     */

    handleFilterTextChange(todoDescription) {
        this.setState({
            todoDescription: todoDescription
        })
    }

    /**
     * Show All Todos, update State
     * */

    handleAllClick(){
        const todoList = this.state.todoList.getAll();
        this.x = 0;
        this.updateState(todoList);
    }



    /**
     * Show Completed Todos, update State
     * */

    handleCompleted(){
        const todoList = this.state.todoList.getCompleted();
        this.x = 1;
        this.updateState(todoList);
    }

    /**
     * Show Active Todos, update State
     * */

    handleActive(){
        const todoList = this.state.todoList.getActives();
        this.x = 2;
        this.updateState( todoList );

    }
    /**
     * Clear completed Todos, update State
     * */

    handleClearCompleted(){
        const todoList = this.state.todoList.clearCompleted();
        this.updateState(todoList);
    }



    /**
     *
     * Rendering process
     *  Compile presentational components and create final Application
     *
     */

    render() {
        return (
            <Router>
                <div className='w-h-100 text-alCen'>
                    <header className='alCen'>
                        <h1 className='headerstyle'>todos</h1>
                        <AddTodo onFilterTextChange={this.handleFilterTextChange}
                                 filterText={this.state.todoDescription}
                                 onKeyUp={this.handleKeyUp}
                        />
                    </header>

                    <Route path='/' component={TodoListContainer} />

                    <Filters  length={ this.state.todoList.getActives().length }
                              onhandleAllClick = {this.handleAllClick}
                              onhandleActive = {this.handleActive}
                              onhandleCompleted = {this.handleCompleted}
                              onhandleClearCompleted = {this.handleClearCompleted}>
                    </Filters>
                    </div>
            </Router>
        );
    }
}


/**
 * A module that exports Application!
 * @exports App
 */

export default App;



