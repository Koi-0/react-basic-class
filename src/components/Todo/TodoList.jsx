import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggleUpdate, handleDelete }) => {
    return (
        <ul>
            {todos.map(({ id, text, completed }) => (
                <TodoItem key={id} completed={completed} text={text} handleToggleUpdate={handleToggleUpdate} handleDelete={handleDelete} id={id} />
            ))}
        </ul>
    );
};

export default TodoList;
