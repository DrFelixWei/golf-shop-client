import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import ThemeSwitcher from './theme-switcher';
import Login from './login/login'
import CartIcon from './cart/cartIcon';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='p-4'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>{t('home')}</Link>
        <div className="flex items-center gap-4">
          <LocalSwitcher />
          <ThemeSwitcher />

          <Login/>
          <CartIcon/>
        </div>
      </nav>
    </header>
  );
}
