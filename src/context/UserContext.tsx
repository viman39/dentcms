import { useState, createContext, useContext } from 'react';
import { User } from '../App.types';

interface AuthContextProviderProps {
    children: React.ReactNode;
    userData: User;
}

interface AuthContext {
    user: User | null;
    loginUser: (x: User) => void;
    logoutUser: () => void;
    isLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    userData,
    children,
}) => {
    const [user, setUser] = useState<User | null>(userData);

    const loginUser = (user: User) => {
        setUser(user);
        localStorage.setItem('userData', JSON.stringify(user));
    };

    const logoutUser = () => {
        localStorage.removeItem('userData');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, isLoggedIn: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        console.error('Authcontext not used inside Provider component');
        return {
            user: null,
            isLoggedIn: false,
            loginUser: () => {},
            logoutUser: () => {},
        };
    }

    return context;
};
