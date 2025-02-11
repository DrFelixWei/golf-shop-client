'use client';

import LoginForm from './login-form';
import { useState } from 'react';

interface LoginStatusProps {
  translations: Record<string, string>;
}

const LoginStatus: React.FC<LoginStatusProps> = ({ translations }) => {
  const [isLoggedIn] = useState(false);
  const [username] = useState('John');
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const handleOpenLoginForm = () => setIsLoginFormOpen(true);
  const handleCloseLoginForm = () => setIsLoginFormOpen(false);

  return (
    <>
      <label onClick={handleOpenLoginForm} style={{ cursor: 'pointer' }}>
        {isLoggedIn ? (
          <p>{translations.greetingUser} {username}!</p>
        ) : (
          <p>{translations.greetingGuest}</p>
        )}
      </label>

      {isLoginFormOpen && (
        <LoginForm translations={translations} onClose={handleCloseLoginForm} />
      )}
    </>
  );
};

export default LoginStatus;
