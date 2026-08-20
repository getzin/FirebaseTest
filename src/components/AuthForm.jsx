import { useState } from "react";
import { useAuth } from "../context/useAuth";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, login, error } = useAuth();

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

      <button onClick={() => login(email, password)}>Login</button>
      <button onClick={() => register(email, password)}>Registrieren</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default AuthForm;
