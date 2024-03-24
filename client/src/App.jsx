import "./App.css";
import AuthPage from "./pages/AuthPage";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { ToastContainer } from "react-toastify";

const ProtectedRoute = ({ element, ...rest }) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<ProtectedRoute element={<HomePage />} />}
        />
        <Route path="/login" element={<AuthPage page="login" />} />
        <Route path="/signup" element={<AuthPage page="signup" />} />
        <Route
          path="/user/:id"
          element={<ProtectedRoute element={<UserPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
