import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Clean the house", completed: false },
    { id: 3, text: "Go for a run", completed: false },
    { id: 4, text: "Finish homework", completed: false },
    { id: 5, text: "Call mom", completed: false },
    { id: 6, text: "Buy groceries", completed: false },
    { id: 7, text: "Walk the dog", completed: false },
    { id: 8, text: "Read a book", completed: false },
    { id: 9, text: "Do laundry", completed: false },
    { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
    const [todos, setTodos] = useState(SAMPLE_TODOS);

    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newTodo.trim()) {
            return;
        }

        setTodos([{ id: crypto.randomUUID(), text: newTodo }, ...todos]);
        setNewTodo(""); // input 태그의 value 제거
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleToggleUpdate = (id) => {
        // 1. todos 배열의 각 항목을 순회하고, 수정된 항목을 반환하여 새로운 배열을 만든다.
        const updatedTodos = todos.map((todo) => {
            // 2. 현재 항목의 id가 수정하려는 id와 일치하는지 확인한다.
            if (todo.id === id) {
                // 3. id가 일치하면 completed 상태를 반전시킨 새로운 항목을 반환한다.
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            } else {
                // 4. id가 일치하지 않으면 기존 항목을 그대로 반환한다.
                return todo;
            }
        });

        // 5. 상태를 새로운 배열로 업데이트한다.
        setTodos(updatedTodos);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Enter a new todo" />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(({ id, text, completed }) => (
                    <li key={id}>
                        <p style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</p>
                        <button onClick={() => handleToggleUpdate(id)}>{completed ? "취소하기" : "완료하기"}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
