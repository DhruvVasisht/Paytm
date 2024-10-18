import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import TransferMoney from "./pages/TransferMoney";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/send" element={<TransferMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App