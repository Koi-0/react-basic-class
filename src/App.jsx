import TodoList from "./components/TodoList";

const App = () => {
    // const [상태, 상태변경함수] = useState(초기값)

    return (
        <main className="main-center">
            <TodoList />
        </main>
    );
};

export default App;
