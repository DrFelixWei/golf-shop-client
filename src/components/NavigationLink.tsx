'use client';

import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

export default function NavigationLink({
    href,
    children,
    ...rest
} : LinkProps & { children: ReactNode }) {
    
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
    const isActive = pathname === href;

    return (
        <Link
            area-current={isActive ? "page" : undefined}
            className={clsx("inline-block px-2 py-3 transition-colors",
                isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
            )}
            href={href}
            {...rest}
            >

            {children}

        </Link>
    );
};
