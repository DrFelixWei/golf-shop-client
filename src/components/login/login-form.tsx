'use client';

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface LoginFormProps {
  translations: Record<string, string>;
  onClose: () => void;
  onConfirm: (username: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ translations, onClose, onConfirm }) => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSwitchMode = () => {
    setIsCreatingAccount(!isCreatingAccount);
    setErrorMessage('');
    setSuccessMessage('');
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
      setSuccessMessage(translations.loginSuccess);
      setErrorMessage('');
      onConfirm(user.name);
    } else {
      setErrorMessage(translations.invalidEmailPass);
    }
  };

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      setErrorMessage(translations.passMismatch);
      return;
    }

    if (password.length < 6) {
      setErrorMessage(translations.passLength);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some((user: any) => user.email === email)) {
      setErrorMessage(translations.duplicateEmail);
      return;
    }

    users.push({ email, name, password });
    localStorage.setItem('users', JSON.stringify(users));

    setSuccessMessage(translations.accountCreated);
    setErrorMessage('');
    handleSwitchMode();
  };

  return (
    <Box sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1300, backgroundColor: '#f9f9f9', padding: 4, borderRadius: 2, boxShadow: 24, maxWidth: 400 }}>
      <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" textAlign="center" mb={3}>
        {isCreatingAccount ? translations.createAccount : translations.login}
      </Typography>
      {errorMessage && <Alert severity="error" sx={{ mb: 2 }}>{errorMessage}</Alert>}
      {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

      <TextField
        fullWidth
        label={translations.email}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      {isCreatingAccount && (
        <TextField
          fullWidth
          label={translations.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
      )}
      <TextField
        fullWidth
        label={translations.password}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      {isCreatingAccount && (
        <TextField
          fullWidth
          label={translations.confirmPassword}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
        />
      )}

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={isCreatingAccount ? handleCreateAccount : handleLogin}
      >
        {isCreatingAccount ? translations.createAccount : translations.login}
      </Button>

      <Typography textAlign="center" sx={{ mt: 2, cursor: 'pointer' }} onClick={handleSwitchMode}>
        {isCreatingAccount ? translations.switchToLogin : translations.switchToSignUp}
      </Typography>
    </Box>
  );
};

export default LoginForm;
