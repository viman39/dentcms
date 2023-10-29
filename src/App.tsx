import { Router } from "./Router";
import Layout from "./components/Layout/Layout";

import { AuthContextProvider } from "./context/UserContext";

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Router />
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
