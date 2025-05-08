'use client'
import type { FC } from 'react';
import { TechnologiesList } from '@/features';

export const Technologies: FC = () => {

  const technologiesList = ['Html', 'Css', 'JavaScript', 'TypeScript', 'React', 'OpenLayer', '...' ]


  return (
    <div className='flex flex-wrap gap-2'>
      Технологии:
      <TechnologiesList list={technologiesList}/>
    </div>
  )
}