export interface User {
    email: string;
    firstName: string;
    lastName: string;
}

export interface AuthContextProviderProps {
    children: React.ReactNode;
    userData: User;
}

export interface AuthenticationContext {
    user: User | null;
    loginUser: (x: User) => void;
    logoutUser: () => void;
    isLoggedIn: boolean;
}
