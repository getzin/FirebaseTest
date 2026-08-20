import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    console.log(result.user);
  }

  async function login() {
    const result = await signInWithEmailAndPassword(auth, email, password);

    console.log(result.user);
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="E-Mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={login}>Login</button>
      <button onClick={register}>Registrieren</button>
    </div>
  );
}

export default AuthForm;
