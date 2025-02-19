import { Link, useParams } from "react-router";
import TodoItem, { ActionButton } from "../components/Todo/TodoItem";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoDetailPage = () => {
    const { todos } = useContext(TodoContext);
    const { id } = useParams();

    const targetTodoItem = todos.find((todo) => todo.id === id);

    return (
        <DetailPageWrapper>
            {targetTodoItem ? <TodoItem id={targetTodoItem.id} text={targetTodoItem.text} completed={targetTodoItem.completed} /> : <p>해당하는 데이터를 찾을 수 없습니다.</p>}

            <Link to="/">
                <BackButton $bgColor="#242424">돌아가기</BackButton>
            </Link>
        </DetailPageWrapper>
    );
};

const DetailPageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const BackButton = styled(ActionButton)`
    width: 100%;
`;

export default TodoDetailPage;
