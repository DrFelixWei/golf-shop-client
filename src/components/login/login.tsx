import { useTranslations } from 'next-intl';
import LoginStatus from './login-status';

export default function Login() {
  const t = useTranslations('Login');

  return (
    <LoginStatus 
      translations={{
        greetingGuest: t('greetingGuest'), 
        greetingUser: t('greetingUser'), 
        email: t('email'),
        name: t('name'),
        password: t('password'),
        confirmPassword: t('confirmPassword'),
        createAccount: t('createAccount'),
        login: t('login'),
        switchToLogin: t('switchToLogin'),
        switchToSignUp: t('switchToSignup'),
        loginSuccess: t('loginSuccess'),
        invalidEmailPass: t('invalidEmailPass'),
        passMismatch: t('passMismatch'),
        passLength: t('passLength'),
        duplicateEmail: t('duplicateEmail'),
        accountCreated: t('accountCreated'),
        forgotPassword: t('forgotPassword'),
      }}
    />
  );
}
