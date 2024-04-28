import { Todo } from "../../types";
import Task from "./Task";

async function TodoTable() {
  const response = await fetch("http://127.0.0.1:8000/todos/");
  const todo_list: Todo[] = await response.json();
  return (
    <table className="w-full">
      <thead>
        <tr className="flex justify-between px-2 py-1 bg-gray-100 shadow-md">
          <th>Task</th>
          <th>Actions</th>{" "}
        </tr>
      </thead>
      <tbody>
        {todo_list.map((task: Todo) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
