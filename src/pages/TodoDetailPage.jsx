import { Link, useParams } from "react-router";
import { SAMPLE_TODOS } from "../constants/sample-todos";
import TodoItem, { ActionButton } from "../components/Todo/TodoItem";
import styled from "styled-components";

const TodoDetailPage = () => {
    const { id } = useParams();

    const targetTodoItem = SAMPLE_TODOS.find((todo) => todo.id === id);

    return (
        <DetailPageWrapper>
            <TodoItem id={targetTodoItem.id} text={targetTodoItem.text} completed={targetTodoItem.completed} />

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
