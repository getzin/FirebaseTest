import { useState } from "react";
import { useAuth } from "../context/useAuth";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, login, loginWithGoogle, error, loading } = useAuth();

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

      <button onClick={() => login(email, password)} disabled={loading}>
        {loading ? "Login..." : "Login"}
      </button>
      <button onClick={() => register(email, password)} disabled={loading}>
        {loading ? "Registrieren..." : "Registrieren"}
      </button>
      <button onClick={loginWithGoogle} disabled={loading}>
        {loading ? "Google Login..." : "Mit Google anmelden"}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default AuthForm;
