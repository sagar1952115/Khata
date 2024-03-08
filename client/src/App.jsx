import "./App.css";
import AuthPage from "./pages/AuthPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage page="login" />} />
        <Route path="/signup" element={<AuthPage page="signup" />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
