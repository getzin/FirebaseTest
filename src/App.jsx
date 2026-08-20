import AuthForm from "./components/AuthForm";
import { useAuth } from "./context/useAuth";

function App() {
  const { user, logout } = useAuth();

  return (
    <main className="flex min-h-screen items-center justify-center">
      {user ? (
        <div>
          <p>Angemeldet als: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <AuthForm />
      )}
    </main>
  );
}

export default App;
