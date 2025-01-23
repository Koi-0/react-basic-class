import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
];

const TodoList = () => {
    const [todos, setTodos] = useState(SAMPLE_TODOS);

    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // <2>

        if (!newTodo.trim()) {
            return; // <3>
        }

        setTodos([{ id: crypto.randomUUID(), text: newTodo }, ...todos]); // <4>
        setNewTodo(""); // <5>
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            {/* <1> */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Enter a new todo" />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
