import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/Latout/RootLayout";
import TodoProvider from "./components/provider/TodoProvider";
import TodoContainer from "./components/Todo/TodoContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route
                        index
                        element={
                            <TodoProvider>
                                <TodoContainer />
                            </TodoProvider>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
