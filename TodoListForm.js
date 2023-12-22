import { useRef } from "react";
import classes from "./TodoListForm.module.css";
import List from "./Lists";

function TodoListForm() {
  const todoInputRef = useRef();
  let arr = [];
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;
    const id = Math.random().toString();
    const data = {
        id: id,
        message: enteredTodo,
    }
    arr.push(data);
    console.log(arr)
  };
  return (
    <section>
      <div>
        <form className={classes.form}>
          <input
            type="text"
            className={classes.input}
            id="Todo"
            ref={todoInputRef}
            placeholder="Write..."
            required
          />
          <button className={classes.button} onClick={submitHandler}>
            Add
          </button>
        </form>
      </div>
      <div>
        <List items={arr} />
      </div>
    </section>
  );
}

export default TodoListForm;
