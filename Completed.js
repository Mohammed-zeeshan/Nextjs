import { MongoClient } from "mongodb";

function CompletedPage(props) {
  return (
    <ul>
        {props.todolist.map((item) => (
            <li>{item.todo}</li>
        ))}
    </ul>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://mohammedzeeshan440:vxFaEVGFTlab3hZW@cluster0.fffqgk6.mongodb.net/todo?retryWrites=true&w=majorityy"
  );

  const db = client.db();

  const todocollections = db.collection('todolist')

  const todolist = await todocollections.find({status: 'Complete'}).toArray();

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

export default CompletedPage;
