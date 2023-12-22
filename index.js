import { Fragment } from "react";
import TodoListForm from "../Components/TodoListForm";
import List from "../Components/Lists";
import { MongoClient } from "mongodb";

function HomePage(props) {
  async function addItemsHandler(enteredItems) {
    const response = await fetch("/api/new-items", {
      method: "POST",
      body: JSON.stringify(enteredItems),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }
  console.log(props.todolist);
  return (
    <Fragment>
      <TodoListForm onAddItems={addItemsHandler} />
      <List todolist={props.todolist} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://mohammedzeeshan440:vxFaEVGFTlab3hZW@cluster0.fffqgk6.mongodb.net/todo?retryWrites=true&w=majorityy"
  );
  const db = client.db();

  const todocollections = db.collection("todolist");

  const todolist = await todocollections.find().toArray();

  client.close();

  return {
    props: {
      todolist: todolist.map((item) => ({
          todo: item.todo,
          id: item._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
