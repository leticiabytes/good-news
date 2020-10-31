/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, createContext, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

interface User {
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoodNews:token');
    const user = localStorage.getItem('@GoodNews:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      const credential = await api.get('users');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      credential.data.map((o: any) => {
        if (o.email === email && o.password === password) {
          const token = o.token.toString();
          const user = o;

          localStorage.setItem('@GoodNews:token', token);
          localStorage.setItem('@GoodNews:user', JSON.stringify(user));

          history.push('/posts');
          return setData({ token, user });
        }
        return credential;
      });
    },
    [history],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoodNews:token');
    localStorage.removeItem('@GoodNews:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('userAuth must be used within an AuthProvider');
  }

  return context;
}
