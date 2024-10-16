import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Signup: React.FC = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasSpecialChar: false,
    hasCapitalLetter: false,
    hasNumber: false,
  });

  const auth = getAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const email = input.email.toLowerCase().trim();
    const password = input.password;

    if (password !== input.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        console.log("Successfully signed up");
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Check password requirements
    if (name === "password" || name === "confirmPassword") {
      setPasswordRequirements({
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        hasCapitalLetter: /[A-Z]/.test(value),
        hasNumber: /\d/.test(value),
      });
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    signupContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Roboto, sans-serif',
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '2rem',
      width: '100%',
      maxWidth: '400px',
    },
    logo: {
      textAlign: 'center',
      marginBottom: '1rem',
    },
    logoImage: {
      maxWidth: '100px',
    },
    heading: {
      color: '#333',
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    inputGroup: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '1rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      marginBottom: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginTop: '0.5rem',
    },
    passwordRequirements: {
      fontSize: '0.8rem',
      color: '#666',
      marginBottom: '1rem',
    },
    errorMessage: {
      color: 'red',
      fontSize: '0.8rem',
      marginBottom: '1rem',
    },
    button: {
      width: '100%',
      padding: '0.55rem',
      backgroundColor: '#c41e3a',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '1rem',
      fontSize: '0.9rem',
    },
    loginLinkAnchor: {
      color: 'blue',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.signupContainer}>
      <div style={styles.formContainer}>
        <div style={styles.logo}>
          <img src="/ccflogo.png" alt="Logo" style={styles.logoImage} />
        </div>
        <h1 style={styles.heading}>Create Account</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                placeholder="Enter your first name"
                type="text"
                onChange={handleChange}
                value={input.firstName}
                required
                style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                placeholder="Enter your last name"
                type="text"
                onChange={handleChange}
                value={input.lastName}
                required
                style={styles.input}
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
            value={input.email}
            required
            style={styles.input}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Create a password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            style={styles.input}
          />
          <div style={styles.passwordRequirements}>
            <p>Password requires:</p>
            <ul>
              <li style={{ color: passwordRequirements.hasSpecialChar ? 'green' : 'red' }}>
                One special character
              </li>
              <li style={{ color: passwordRequirements.hasCapitalLetter ? 'green' : 'red' }}>
                One capital letter
              </li>
              <li style={{ color: passwordRequirements.hasNumber ? 'green' : 'red' }}>
                One number
              </li>
            </ul>
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            placeholder="Enter password again"
            onChange={handleChange}
            value={input.confirmPassword}
            type="password"
            required
            style={styles.input}
          />
          {error && <p style={styles.errorMessage}>{error}</p>}
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.loginLink}>
          Already have an account? <Link to="/login" style={styles.loginLinkAnchor}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
