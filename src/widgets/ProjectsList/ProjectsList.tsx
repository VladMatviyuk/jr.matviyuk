import type { FC } from 'react';
import { projectsList } from '@/data';
import { ProjectItem } from '@/widgets/ProjectItem/ProjectItem';

export const ProjectsList: FC = () => {
  return (
    <ul>
      { projectsList.map((project) => (
        <li key={ project.name } className="flex flex-col gap-2 my-6">
          <ProjectItem project={project} />
        </li>
      )) }
    </ul>
  )
}