import { useEffect } from "react";
import Item from "./Item";

function List(props) {
   useEffect(() => {
    console.log(props.items)
   }, [])
    return (
        <ul>
            {props.items.map((item) => (
                <Item
                    key={item.id}
                    message={item.message}
                />
            ))}
        </ul>
    )
}

export default List;