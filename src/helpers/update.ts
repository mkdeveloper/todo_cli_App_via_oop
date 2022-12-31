import inquirer from "inquirer";
import TodoList from "./todoList.js";
import chalk from "chalk";

async function updateTodo(list: TodoList) {
  if (list.todolist.length > 0) {
    const { todoNum } = await inquirer.prompt({
      name: "todoNum",
      type: "number",
      message: "Please enter todo Id to update its status: ",
    });
    const todoId = list.todolist.findIndex((obj) => obj.getId === todoNum);
    if (todoId != -1) {
      list.updateTodo(todoId);
      console.log(chalk.greenBright("Status Updated"));
    } else {
      console.log(chalk.redBright("Wrong Id Entered"));
    }
  } else {
    console.log(chalk.redBright("Todo list is Empty"));
  }
}

export default updateTodo;
