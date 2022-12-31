import inquirer from "inquirer";
import Todo from "./todo.js";
import TodoList from "./todoList.js";

async function todoEntry(list: TodoList) {
  const { todo, discription } = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "Please Enter Todo to save: ",
      validate: (input: string) => {
        if (input === "") {
          return "Please enter a valid name";
        } else {
          return true;
        }
      },
    },
    {
      name: "discription",
      type: "input",
      message: "Please enter discription: ",
    },
  ]);

  const status = "Pending";

  const newObj = new Todo(todo, discription, status);

  list.addTodo(newObj);
}

export default todoEntry;
