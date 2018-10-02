/**
 *  Class representing an Todo module.
 */
export class Todo {
    /**
     *
     * @param {number} id - id of Todo
     * @param {string} discription - description of Todo
     * @param {Boolean} status - representing status of Todo
     *
     */
    constructor({ id = Date.now(), description = '', status = false }) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    /**
     * Changing status to true or false
     * */

    changeStatus(){
        this.status = !this.status;

    }
}