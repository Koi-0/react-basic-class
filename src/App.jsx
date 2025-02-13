import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/Latout/RootLayout";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="todos/:id" element={<TodoDetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
