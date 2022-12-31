import Todo from "./todo.js";

class TodoList {
  todolist: Todo[];

  constructor() {
    this.todolist = [];
  }

  addTodo(item: Todo) {
    this.todolist.push(item);
  }

  removeTodo(index: number) {
    this.todolist.splice(index, 1);
  }

  updateTodo(index: number) {
    this.todolist[index].setStat = "Completed";
  }

  printView() {
    if (this.todolist.length !== 0) {
      for (let obj of this.todolist) {
        console.log(`
            *******************************
            Id: ${obj.getId}
            Name: ${obj.getName}
            Discription: ${obj.getDis}
            Status: ${obj.getStat}
            *******************************
            `);
      }
    } else {
      console.log("Todo is Empty");
    }
  }
}

export default TodoList;
