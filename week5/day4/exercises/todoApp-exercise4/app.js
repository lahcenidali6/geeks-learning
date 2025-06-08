import TodoList from "./todo.js"
const tasks= new TodoList()
tasks.add("Study JavaScript");
tasks.add("Write blog post");
tasks.add("Buy groceries");
tasks.completeTask(2)
console.log(tasks)