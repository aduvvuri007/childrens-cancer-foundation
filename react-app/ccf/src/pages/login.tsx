import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";

type InputState = {
  email: string;
  password: string;
};

function Login() {
  const [input, setInput] = useState<InputState>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const auth = getAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const email = input.email.toLowerCase().trim();
    const password = input.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        console.log("Successfully signed in");
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          setError("The email address or password is incorrect");
        } else {
          console.log(err.code);
          alert(err.code);
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      fontFamily: 'Roboto, sans-serif',
      rowGap: '50px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '60%',
      backgroundColor: '#fff',
      padding: '20px',
      marginRight: '20px',
    },
    
    input: {
      width: '90%',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },

    button: {
      width: '95%',
      padding: '10px',
      backgroundColor: '#BE0019',
      color: '#fff',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '10px',
    },
    error: {
      color: '#BE0019',
      marginBottom: '10px',
    },
    rememberMe: {
      margin: '10px 0',
    },
    imageContainer: {
      flex: 1,
      height: '70%',
      backgroundImage: 'url("/login.png")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: '8px',
      maxWidth: '40%',
      marginTop: '20px', 
    },
    heading: {
      textAlign: 'center',
      color: '#BE0019',
    },

    spacing: {
      marginTop: '20px',
    },

    logo: {
      textAlign: 'center',
      marginBottom: '1rem',
    },
    logoImage: {
      maxWidth: '100px',
    },

  };

  return (
    <div style={styles.container}>
      <form autoComplete="off" style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.logo}>
          <img src="/ccflogo.png" alt="Logo" style={styles.logoImage} />
        </div>
        <h1 style={styles.heading}>Welcome!</h1>
        <p>New to Children’s Cancer Foundation? <Link to="/signup">Sign Up</Link></p>
        <label htmlFor="email" className="label-name">
          <span className="content-name">Email</span>
        </label>
        <input
          name="email"
          placeholder="Enter your email"
          type="text"
          onChange={handleChange}
          value={input.email}
          required
          style={styles.input}
        />
        <label htmlFor="password" className="label-name">
          <span className="content-name">Password</span>
        </label>
        <input
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={input.password}
          type="password"
          required
          style={styles.input}
        />
        <div style={styles.rememberMe}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me for 30 days</label>
        </div>
        <div>
          {error ? <p style={styles.error}>{error}</p> : null}
          <button title="Login" aria-label="Login" type="submit" style={styles.button}>
            Log in
          </button>
        </div>
        <div>
          <Link to="/forgot-password" style = {{textAlign: 'center'}}>Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
