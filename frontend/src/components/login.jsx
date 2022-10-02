import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ColorAlerts from "./alert";
import { login, reset } from "../features/auth/authSlice";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, messege } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if(user){
      navigate('/')
    }
    if (isError) {
      ColorAlerts(messege);
    }
    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, messege, navigate, dispatch]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onLogin = (e) => {
    if (!username || !password) {
      ColorAlerts("Please Fill you Credentials");
    } else {
      const userData = {
        username,
        password,
      };
      dispatch(login(userData));
    }
  };
  const onRegister = (e) => {
    navigate("/Register");
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="loginForm" style={{ color: "black" }}>
        <form className="realForm">
            <h1 style={{ position: "absolute", top: "10%", fontSize: "2rem" }}>
              Login
            </h1>
            <div
              className="input-grp"
              style={{ position: "absolute", top: "30%", fontSize: "2rem" }}
            >
              <TextField
                id="outlined-basic"
                style={{ marginBottom: "20px" }}
                size="small"
                fullWidth
                label="Username"
                onChange={onChange}
                name="username"
                value={username}
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                size="small"
                fullWidth
                label="Password"
                name="password"
                onChange={onChange}
                value={password}
                variant="outlined"
              />
            </div>
            <div className="alert">
              <ToastContainer />
            </div>
            <div
              className="form-group"
              style={{ position: "absolute", top: "60%", fontSize: "2rem" }}
            >
              <Button variant="contained" onClick={onLogin} size="small">
                Sign-In
              </Button>
            </div>
            <div
              className="form-group"
              style={{ position: "absolute", top: "80%", fontSize: "2rem" }}
            >
              <Button variant="contained" onClick={onRegister}>
                Create your Amazon account
              </Button>
            </div>
        </form>
    </div>
  );
}

export default Login;
