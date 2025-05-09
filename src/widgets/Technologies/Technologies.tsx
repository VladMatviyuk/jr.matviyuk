'use client'

import type { FC } from 'react';
import { TechnologiesList } from '@/features';
import { technologiesList } from '@/data';

export const Technologies: FC = () => {

  return (
    <div className='flex flex-wrap gap-2'>
      Технологии:
      <TechnologiesList list={technologiesList}/>
    </div>
  )
}