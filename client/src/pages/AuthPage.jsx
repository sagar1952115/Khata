import { Input } from "postcss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = ({ page }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  function validateInputs(name, email, password, confirmPassword) {
    if (page === "signup" && !name.trim()) {
      toast.error("Name is required.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Email is invalid.");
      return false;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  }
  const handleLogin = async () => {
    if (validateInputs(name, email, password, confirmPassword)) {
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(confirmPassword);
    }

    const res = await axios
      .post("https://khata.onrender.com/api/auth/login", { email, password })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          localStorage.setItem("token", data.data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = async () => {
    if (validateInputs(name, email, password, confirmPassword)) {
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(confirmPassword);
      const res = await axios
        .post("https://khata.onrender.com/api/auth/signup", {
          fname: name,
          email,
          password,
        })
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            setEmail("");
            setPassword("");
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSubmit = () => {
    if (page === "signup") {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
      />
      <div className="flex border flex justify-center  items-center w-full h-screen">
        {/* <div className="absolute top-2 left-2">Khata</div> */}
        <div className="shadow-lg flex p-2 px-4 flex-col gap-6 items-center justify-center">
          <h1 className="text-indigo-500 text-2xl font-bold mt-3">
            {page === "signup" ? "Sign Up" : "Login"}
          </h1>
          {page === "signup" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border outline-none rounded-md p-2"
              type="text"
              placeholder="Enter your name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border outline-none rounded-md p-2"
            type="text"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border outline-none rounded-md p-2"
            type="text"
            placeholder="Enter your password"
          />
          {/* <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border outline-none rounded-md p-2"
          type="text"
          placeholder="Confirm your password"
        /> */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-500 text-white px-8 text-bold p-2  rounded-md outline-none"
          >
            {page === "signup" ? "Sign Up" : "Login"}
          </button>

          {page === "signup" ? (
            <p className="text-sm mb-2">
              Already have an account?{" "}
              <Link className="text-sky-500" to="/login">
                Login here
              </Link>
            </p>
          ) : (
            <p className="text-sm mb-2">
              Dont have an account?{" "}
              <Link className="text-sky-500" to="/signup">
                Signup here
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
