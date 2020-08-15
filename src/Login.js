import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const log = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lim.size_1200x630.v_158275102.png"
          alt=""
          className="login_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sing In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={log} type="submit" className="sign_in">
            Sign In
          </button>
        </form>

        <p>
          By Singning-in you agree to Amazon's Conditions of use and sale ,
          Please see our Privacy Notice , our Cookies Notice and our
          Interest-based Ads Notice
        </p>
        <button onClick={register} className="create">
          Create Your Netflix Account
        </button>
      </div>
      <img
        src="https://i.pinimg.com/originals/fa/fb/9f/fafb9ffdb309547506a085b919c46c24.jpg"
        alt=""
        className="peaky"
      />
      <img
        src="https://wallpapercave.com/wp/wp4728458.jpg"
        alt=""
        className="game"
      />
    </div>
  );
}

export default Login;
