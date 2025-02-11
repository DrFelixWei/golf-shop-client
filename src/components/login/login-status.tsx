'use client';

import LoginForm from './login-form';
import LogoutForm from './logout-form';
import { useState, useEffect } from 'react';

interface LoginStatusProps {
  translations: Record<string, string>;
}

const LoginStatus: React.FC<LoginStatusProps> = ({ translations }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isLogoutFormOpen, setIsLogoutFormOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    setUsername(storedUser);
  }, []);

  const handleOpenLoginForm = () => setIsLoginFormOpen(true);
  const handleCloseLoginForm = () => setIsLoginFormOpen(false);
  const handleOpenLogoutForm = () => setIsLogoutFormOpen(true);
  const handleCloseLogoutForm = () => setIsLogoutFormOpen(false);

  const handleClickStatus = () => {
    if (!username) {
      handleOpenLoginForm();
    } else {
      if (isLogoutFormOpen) {
        handleCloseLogoutForm();
      } else {
        handleOpenLogoutForm();
      }
    }
  };

  const dummyLogin = (username: string) => { 
    setUsername(username);
    localStorage.setItem('currentUser', username);
    setIsLoginFormOpen(false);
    window.location.reload();
  };

  const dummyLogout = () => {
    setUsername(null);
    localStorage.removeItem('currentUser');
    setIsLogoutFormOpen(false);
    window.location.reload();
  };

  return (
    <>
      <label onClick={handleClickStatus} style={{ cursor: 'pointer' }}>
        {username ? (
          <p>{translations.greetingUser} {username}!</p>
        ) : (
          <p>{translations.greetingGuest}</p>
        )}
      </label>

      {isLoginFormOpen && (
        <LoginForm translations={translations} onClose={handleCloseLoginForm} onConfirm={dummyLogin} />
      )}

      {isLogoutFormOpen && (
        <LogoutForm translations={translations} onConfirm={dummyLogout} />
      )}
    </>
  );
};

export default LoginStatus;
