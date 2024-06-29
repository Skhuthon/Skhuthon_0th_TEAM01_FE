import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface Auth {
  name: string;
  profile: string;
  email: string;
  role: string;
  todayCaffeineIntakeAmount: number;
  canCaffeineIntakeAmount: number;
}

interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialAuthState: Auth = {
  name: '',
  profile: '',
  email: '',
  role: '',
  todayCaffeineIntakeAmount: 0,
  canCaffeineIntakeAmount: 0,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(() => {
    const storedAuth = sessionStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : initialAuthState;
  });

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'auth') {
        const newAuth = event.newValue
          ? JSON.parse(event.newValue)
          : initialAuthState;
        setAuth(newAuth);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const originalSetItem = sessionStorage.setItem;
  sessionStorage.setItem = (key, value) => {
    const event = new Event('storage');
    event.initEvent('storage', true, true);
    originalSetItem.call(sessionStorage, key, value);
    window.dispatchEvent(event);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
