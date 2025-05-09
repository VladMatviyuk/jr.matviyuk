import type { FC } from 'react';
import Link from 'next/link';
import { socialList } from '@/data';

export const Footer: FC = () => {
  return (
    <footer className='flex justify-center items-center gap-4 p-4'>
      {socialList.map(link => <Link
        key={link.path}
        href={link.path}
        className='hover:underline'
        target='_blank'
      >
        {link.title}
      </Link>)}
    </footer>
  )
}