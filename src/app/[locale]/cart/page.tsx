import { CartItems } from './cart-items'; 
import { useTranslations } from 'next-intl';

export default function CartPage() {
  const t = useTranslations('CartPage'); 

  const translations = {
    yourCart: t('yourCart'),
    cartEmpty: t('cartEmpty'),
    checkout: t('checkout'),
    total: t('total'),
    checkoutUnavailable: t('checkoutUnavailable'),
  };

  return (
    <div>
      <CartItems translations={translations} />
    </div>
  );
}
