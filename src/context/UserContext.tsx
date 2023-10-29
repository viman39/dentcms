import { useState, createContext, useContext } from 'react';
import { User } from '../App.types';

interface AuthContextProviderProps {
    children: React.ReactNode;
}

interface AuthContext {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        console.error('Authcontext not used inside Provider component');
        return {
            user: null,
            setUser: () => {},
        };
    }

    return context;
};
