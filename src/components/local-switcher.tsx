'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentPath = window.location.pathname; // Get the current path

    // Find the path without the locale
    const newPath = currentPath.replace(`/${localActive}`, '');

    startTransition(() => {
      // Replace the current locale with the selected one, while keeping the path
      router.replace(`/${nextLocale}${newPath}`);
    });
  };

  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>Change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>EN</option>
        <option value='fr'>FR</option>
      </select>
    </label>
  );
}
