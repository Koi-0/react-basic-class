import { createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = () => {
    return <div>TodoContext</div>;
};

export default TodoProvider;
