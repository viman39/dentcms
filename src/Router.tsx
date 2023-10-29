import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import { useAuthContext } from './context/UserContext';

export const Router = () => {
    const { user } = useAuthContext();
    console.log(user);
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<LandingPage />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};
