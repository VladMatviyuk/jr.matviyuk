import type { FC } from 'react';
import Link from 'next/link';

export const Nav: FC = () => {
  return (
    <nav className="flex justify-center items-center gap-2 text-sm">
      <Link
        href="/documents/cv.pdf"
        className="hover:underline"
        passHref
        target='_blank'
        rel='noopener noreferrer'
      >
          Резюме
      </Link> /
      <Link href="/projects" className="hover:underline">Проекты</Link>
    </nav>
  )
}