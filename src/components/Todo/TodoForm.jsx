import { useState } from "react";

const TodoForm = ({ addTodos }) => {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todoText.trim()) {
            return;
        }

        addTodos(todoText);

        setTodoText(""); // input 태그의 value 제거
    };

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoText} onChange={handleInputChange} placeholder="Enter a new todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
