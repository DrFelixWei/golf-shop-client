import { useTranslations } from 'next-intl';

export default function LoginStatus() {
  const t = useTranslations('Login');

  const isLoggedIn = false

  return (
    <label>
      { isLoggedIn &&
        <p>{t('greetingUser')}</p>
      }
      { !isLoggedIn &&
        <p>{t('greetingGuest')}</p>
      }
    </label>
  );
}
