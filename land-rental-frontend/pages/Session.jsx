import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SessionCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    console.log("Session", session);

    if (!session) {
      // Redirect to the login page if the session is not valid
      router.push('/');
    }
  }, []);

  return null;
};

export default SessionCheck;
