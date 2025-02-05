import RootLayout from "./components/Latout/RootLayout";
import TodoContainer from "./components/Todo/TodoContainer";

const App = () => {
    return (
        <RootLayout className="main-center">
            <TodoContainer />
        </RootLayout>
    );
};

export default App;
