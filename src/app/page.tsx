import { MainInfoLayout } from '@/layoutы/MainInfoLayout';
import { MainInfo, Nav } from '@/widgets';

export default function Home() {
  return (
    <MainInfoLayout>
      <div className="flex flex-col gap-8 p-8">
        <MainInfo />
        <Nav />
      </div>
    </MainInfoLayout>
  );
}
