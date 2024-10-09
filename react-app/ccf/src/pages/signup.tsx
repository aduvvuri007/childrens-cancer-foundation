import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Signup: React.FC = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  // initialized auth instance
  const auth = getAuth();

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const email = input.email.toLowerCase().trim();
    const password = input.password;

    // creating a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential.user);
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setError("The password is too weak.");
        } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
          setError("The email address is already in use.");
        } else {
          console.log(err.code);
          alert(err.code);
        }
      });
  };

  // handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-body">
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>Fill the form below to create your account.</p>
        <div className="email-input">
          <input
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="password-input">
          <input
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
          />
          <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <div className="btn">
          {error ? <p className="login-error">{error}</p> : null}
          <button title="Sign up" aria-label="Signup" type="submit">
            Create account
          </button>
        </div>
      </form>
      <div className="option">
        <p>
          Already have an account?
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;