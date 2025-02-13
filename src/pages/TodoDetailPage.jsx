import { Link, useParams } from "react-router";
import { SAMPLE_TODOS } from "../constants/sample-todos";
import TodoItem, { ActionButton } from "../components/Todo/TodoItem";

const TodoDetailPage = () => {
    const { id } = useParams();

    const targetTodoItem = SAMPLE_TODOS.find((todo) => todo.id === id);

    return (
        <div>
            <TodoItem id={targetTodoItem.id} text={targetTodoItem.text} completed={targetTodoItem.completed} />

            <ActionButton>
                <Link to="/">돌아가기</Link>
            </ActionButton>
        </div>
    );
};

export default TodoDetailPage;
