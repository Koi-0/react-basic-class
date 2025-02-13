import RootLayout from "./components/Latout/RootLayout";
import TodoProvider from "./components/provider/TodoProvider";
import TodoContainer from "./components/Todo/TodoContainer";

const App = () => {
    return (
        <TodoProvider>
            <RootLayout className="main-center">
                <TodoContainer />
            </RootLayout>
        </TodoProvider>
    );
};

export default App;
