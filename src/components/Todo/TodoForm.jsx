const TodoForm = ({ handleSubmit, newTodo, handleInputChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Enter a new todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
