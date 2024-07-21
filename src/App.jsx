import { useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo item";
import TodoDetails from "./components/todo details";

function App() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [todoDetails, setTodoDetails] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  async function fetchTodosList() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const todosObj = await response.json();
      const todosList = todosObj.todos;

      if (todosList && todosList.length > 0) {
        setTodos(todosList);
        setLoading(false);
        setErrorMsg("");
      } else {
        setErrorMsg("");
        setLoading(false);
        setTodos([]);
      }
    } catch (error) {
      setErrorMsg("cannot load occured at the moment");
    }
  }

  async function fetchDetailsofCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);

    try {
      const response = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const singleTodo = await response.json();
      console.log(singleTodo);
      if (singleTodo) {
        setTodoDetails(singleTodo);
        setShowDialog(true);
      } else {
        setTodoDetails(null);
        setShowDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useState(() => {
    fetchTodosList();
    console.log(todos);
  }, []);

  return (
    <div className={classes.textWrappper}>
      <h1 className={classes.headerTittle}>TODO APP USING MATERIAL UI</h1>
      <div className={classes.todoListWrapper}>
        {loading ? (
          <div className={classes.spinner}></div>
        ) : todos && todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                fetchDetailsofCurrentTodo={fetchDetailsofCurrentTodo}
              />
            );
          })
        ) : null}
      </div>
      <TodoDetails
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        todoDetails={todoDetails}
      />
      ;
    </div>
  );
}

export default App;
