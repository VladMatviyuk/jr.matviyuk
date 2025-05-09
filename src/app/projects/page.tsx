'use client'

import { Header, ProjectsList } from '@/widgets';

export default function ProjectsPage() {
  return (
    <>
      <Header/>
      <section className="flex flex-col px-4">
        <h1>Проекты:</h1>
        <ProjectsList/>
      </section>
    </>
  );
}
