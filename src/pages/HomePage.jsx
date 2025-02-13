import TodoProvider from "../components/provider/TodoProvider";
import TodoContainer from "../components/Todo/TodoContainer";

const HomePage = () => {
    return (
        <TodoProvider>
            <TodoContainer />
        </TodoProvider>
    );
};

export default HomePage;
