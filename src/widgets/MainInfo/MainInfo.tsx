import type { FC } from 'react';
import { Technologies } from '@/widgets';

export const MainInfo: FC = () => {

  return (
    <div className='flex flex-col items-start justify-center gap-4'>
      <h1 className='text-3xl'>Frontend разработчик.</h1>
      <div className=''>Опыт: 6 лет.</div>
      <Technologies />
    </div>
  )
}