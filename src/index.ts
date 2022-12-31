import inquirer from "inquirer";
import { exit } from "process";
import todoEntry from "./helpers/add.js";
import TodoList from "./helpers/todoList.js";
import updateTodo from "./helpers/update.js";
import deleteTodo from "./helpers/delete.js";

const list = new TodoList();

async function main() {
  const { option } = await inquirer.prompt({
    name: "option",
    type: "rawlist",
    message: "Please Select your desire option: ",
    choices: ["View", "Add", "Delete", "Update", "Exit"],
  });

  switch (option) {
    case "View":
      list.printView();
      break;
    case "Add":
      await todoEntry(list);
      break;
    case "Delete":
      await deleteTodo(list);
      break;
    case "Update":
      await updateTodo(list);
      break;
    case "Exit":
      exit(0);
  }

  main();
}

main();
