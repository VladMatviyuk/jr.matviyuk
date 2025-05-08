import { FC } from 'react';
import { Project } from '@/features';
import { IProject } from '@/features';

interface IProps {
  readonly list: IProject[];
}

export const Projects: FC<IProps> = ({list}) => {
  if (!list.length) return <></>

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      { list.map((proj, index) => <Project project={ proj } key={ index }/>) }
    </div>
  )
}