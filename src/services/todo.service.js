import {TodoListModel} from "../models";
import { Todo as TodoModel} from "../models";
export var todoJSON = [];
if(localStorage.length) {
    todoJSON = JSON.parse(localStorage.getItem('todo')).map(todo => new TodoModel({
        id: todo.id,
        description: todo.description,
        status: todo.status
    }))
}

export default new TodoListModel(todoJSON)
