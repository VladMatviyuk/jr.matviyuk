import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TechnologiesList } from '@/features';
import { IProject } from './interfaces';

interface IProps {
  readonly project: IProject;
}

export const Project: FC<IProps> = ({project}) => {
  return (
    <div className="w-full flex justify-center">
      <div className='flex flex-col p-4 gap-4 max-w-96'>
        <Image
          width={ 500 }
          height={ 500 }
          src={ project.imageSrc }
          alt={ 'screenshot app' }
          className="rounded-xl border border-white"
        />
        <div className="flex flex-col">
          {
            project.links.map(link => <Link
                key={ link.link }
                href={ link.link }
                className="text-xl text-blue-500"
              >
                { link.title }
              </Link>
            )
          }
        </div>
        <div className="text-gray-500">
          { project.description }
        </div>
        <div className="flex gap-2">
          <TechnologiesList list={ project.technologies }/>
        </div>
      </div>
    </div>

  )
}