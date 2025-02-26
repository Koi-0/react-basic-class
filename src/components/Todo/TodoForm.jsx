import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./TodoItem";
import { useMutation } from "@tanstack/react-query";
import { addTodos } from "../../api/todo-api";

const TodoForm = () => {
    const { mutate: addTodoMutate } = useMutation({
        mutationFn: addTodos,
    });

    const [todoText, setTodoText] = useState("");

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todoText.trim()) {
            return;
        }

        addTodoMutate(todoText);

        setTodoText("");
    };

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <TodoFormWrapper onSubmit={handleSubmit}>
            <TodoFormInput
                type="text"
                value={todoText}
                onChange={handleInputChange}
                placeholder="Enter a new todo"
                ref={inputRef}
            />
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
