import { useRef } from "react";
import classes from "./TodoListForm.module.css";

function TodoListForm(props) {
  const todoInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current.value;
    const data = {
        todo: enteredTodo,
        status: 'Incomplete',
    }
    props.onAddItems(data);
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
      </div>
    </section>
  );
}

export default TodoListForm;
