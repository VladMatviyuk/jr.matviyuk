import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='flex justify-center items-center gap-4 p-4'>
      <a href='https://github.com/VladMatviyuk' className='hover:underline' target='_blank'>Git</a> |
      <a href='https://t.me/jr_matviyuk' className='hover:underline' target='_blank'>Telegram</a>
    </footer>
  )
}