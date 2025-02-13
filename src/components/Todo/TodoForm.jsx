import { useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoForm = () => {
    const { addTodos } = useContext(TodoContext);

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
        <TodoFormWrapper onSubmit={handleSubmit}>
            <TodoFormInput type="text" value={todoText} onChange={handleInputChange} placeholder="Enter a new todo" />
            <SubmitButton type="submit" $bgColor="#582be6">
                Add Todo
            </SubmitButton>
        </TodoFormWrapper>
    );
};

const TodoFormWrapper = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;

const TodoFormInput = styled.input`
    flex: 8;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: white;
    &::placeholder {
        color: #aaa;
    }
    &:focus {
        border-color: #582be6;
        outline: none;
    }
`;

const SubmitButton = styled(ActionButton)`
    flex: 1;
    text-align: center;
`;

export default TodoForm;
