import { Link, useParams } from "react-router";
import TodoItem, { ActionButton } from "../components/todo/TodoItem";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getTodoItem } from "../api/todo-api";

const TodoDetailPage = () => {
    const { id } = useParams();

    const {
        data: todoItem,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["todos", id],
        queryFn: getTodoItem,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching todos - {error}</div>;
    }

    return (
        <DetailPageWrapper>
            {todoItem ? (
                <TodoItem
                    id={todoItem.id}
                    text={todoItem.text}
                    completed={todoItem.completed}
                />
            ) : (
                <p>해당하는 데이터를 찾을 수 없습니다.</p>
            )}

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
