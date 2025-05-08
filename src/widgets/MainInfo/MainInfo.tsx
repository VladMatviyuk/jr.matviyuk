import type { FC } from 'react';
import { Technologies } from '@/widgets';

export const MainInfo: FC = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-8'>

      <h1 className='text-3xl'>Frontend разработчик.</h1>
      <h2 className='text-2xl'>Матвиюк Владислав Анатольевич.</h2>

      <Technologies />

    </div>
  )
}