export class TodoListModel {
    constructor(list = []) {
        this.list = list;
        this.onChangeFunction = function(){};
    }

    add(todo) {
        this.list.push(todo);
        this.onChangeFunction();
        this.setStorage();
    }

    remove(todo) {
        const index = this.list.indexOf(todo);
        this.list.splice(index, 1);
        this.onChangeFunction();
        this.setStorage();
    }


    getClone() {
        return [...this.list];
    }

    getActives() {
        return this.list.filter(index => !+index.status)
    }

    getAll() {
        return this.list;
    }

    getCompleted() {
        return this.list.filter(index => +index.status)
    }

    clearCompleted() {
        let x = this.getCompleted();
        x.forEach(todo => this.remove(todo));
        this.onChangeFunction();
        return this.list;
    }

    onChange(func){
        this.onChangeFunction = func;
    }
    setStorage(){
        localStorage.setItem('todo', JSON.stringify(this.list));
    }

}

