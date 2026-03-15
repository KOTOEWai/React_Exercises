import React, { createContext, useContext, useState} from 'react';

interface AuthContextType {
    user: string | null;
    isAuthenticated: boolean;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(localStorage.getItem('username'));
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    const login = (username: string) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);
        setUser(username);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
