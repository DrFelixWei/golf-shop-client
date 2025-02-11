'use client';

import LoginForm from './login-form';
import LogoutForm from './logout-form';
import { useState } from 'react';

interface LoginStatusProps {
  translations: Record<string, string>;
}

const LoginStatus: React.FC<LoginStatusProps> = ({ translations }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isLogoutFormOpen, setIsLogoutFormOpen] = useState(false);

  const handleOpenLoginForm = () => setIsLoginFormOpen(true);
  const handleCloseLoginForm = () => setIsLoginFormOpen(false);
  const handleOpenLogoutForm = () => setIsLogoutFormOpen(true);
  const handleCloseLogoutForm = () => setIsLogoutFormOpen(false);

  const handleClickStatus = () => {
    if (!isLoggedIn) {
      handleOpenLoginForm();
    }
    else{
      if (isLogoutFormOpen) {
        handleCloseLogoutForm();
      } else {
        handleOpenLogoutForm();
      }
    }
  };

  const dummyLogin = (username: string) => { 
    setIsLoggedIn(true);
    setUsername(username);
    setIsLoginFormOpen(false);
  };

  const dummyLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setIsLogoutFormOpen(false);
  };

  return (
    <>
      <label onClick={handleClickStatus} style={{ cursor: 'pointer' }}>
        {isLoggedIn ? (
          <p>{translations.greetingUser} {username}!</p>
        ) : (
          <p>{translations.greetingGuest}</p>
        )}
      </label>

      {isLoginFormOpen && (
        <LoginForm translations={translations} onClose={handleCloseLoginForm} onConfirm={dummyLogin} />
      )}

      {isLogoutFormOpen && (
        <LogoutForm translations={translations} onConfirm={dummyLogout}/>
      )}
    </>
  );
};

export default LoginStatus;
