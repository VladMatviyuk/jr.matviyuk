import type { FC } from 'react';
import Link from 'next/link';
import { TechnologiesList } from '@/widgets/TechnologiesList/TechnologiesList';

export interface Project {
  readonly link: string;
  readonly name: string;
  readonly description: string;
  readonly technologies: string[];
}

interface IProps {
  readonly project: Project;
}

export const ProjectItem: FC<IProps> = ({project}) => {
  return (
    <>
      <div>
        <Link
          href={ project.link }
          className="text-blue-400"
          target="_blank"
        >
          { project.name }
        </Link> ( { project.description } )
      </div>
      <div className="flex flex-wrap gap-2">
        <TechnologiesList list={ project.technologies }/>
      </div>
    </>
  )
}