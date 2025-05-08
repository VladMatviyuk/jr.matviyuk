import { Projects } from '@/widgets/Projects/Projects';
import { projects } from '@/data/projects';

export default function ProjectsPage() {

  return (
      <div className='p-4 flex flex-col gap-4 h-full'>
        <h1>Личные проекты:</h1>
        <Projects list={projects} />
      </div>
  );
}
