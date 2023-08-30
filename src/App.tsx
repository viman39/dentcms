import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import { AuthContextProvider } from "./context/UserContext";

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Router>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
