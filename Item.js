function Item (props) {
    return (
        <div>
            <li>{props.message}</li>
            <button>Completed</button>
            <button>Delete</button>
        </div>
    )
}

export default Item;