import { User } from './App.types';
import { Router } from './Router';
import Layout from './components/Layout/Layout';

import { AuthContextProvider } from './context/UserContext';

function App() {
    const localUserData = localStorage.getItem('userData');
    const userData: User = localUserData ? JSON.parse(localUserData) : null;

    return (
        <AuthContextProvider userData={userData}>
            <Layout>
                <Router />
            </Layout>
        </AuthContextProvider>
    );
}

export default App;
