import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const storedUser = cookies.get('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, cookie) => {
    sessionStorage.setItem('email', email);
    console.log(email);
    // const userObject = { email, cookie };
    // setUser(userObject);
    setUser({ email, cookie });
    console.log("cokies" +cookie)

    console.log("login" + email);
  };

  const logout = () => {
    // Remove the user information from cookies on logout
    cookies.remove('user');
    doSignOut();
  };

  async function doSignOut() {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_ENDPOINT + '/admin/signout/',
        {},
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true,
        }
      );
      console.log(response);
      setUser(null);
      document.cookie = null;
      router.push('/loginform');
    } catch (error) {
      console.error('Error during signout: ', error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
