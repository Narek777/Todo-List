import React, { Component } from 'react';
import Todo from "./todo";

export class TodoList extends Component {

    createTodoComponents(){
        const { todos } = this.props;
        const components = todos.map( ( todo, index ) => <Todo key={ index } todo={todo}/>);
        return components;
    }

    render(){
        const components = this.createTodoComponents();
        return (
            <div className='flex todo' id = "todolist">
                { components }
            </div>


        );
    }
}
