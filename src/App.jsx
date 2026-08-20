import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AuthForm from "./components/AuthForm";
import { auth } from "./firebase/config";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      {user ? (
        <div>
          <p>Angemeldet als: {user.email}</p>
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      ) : (
        <AuthForm />
      )}
    </main>
  );
}

export default App;
