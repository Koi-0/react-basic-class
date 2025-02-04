const TodoItem = ({ completed, text, handleToggleUpdate, handleDelete, id }) => {
    return (
        <li>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</p>
            <button onClick={() => handleToggleUpdate(id)}>{completed ? "취소하기" : "완료하기"}</button>
            <button onClick={() => handleDelete(id)}>삭제하기</button>
        </li>
    );
};

export default TodoItem;
