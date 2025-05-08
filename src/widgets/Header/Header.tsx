import type { FC } from 'react';
import { ThemeToggle } from '@/features';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className='w-full p-4 flex justify-between items-center'>
      <Link href={'/'}>Jr.Matviyuk</Link>
      <ThemeToggle/>
    </header>
  );
};

