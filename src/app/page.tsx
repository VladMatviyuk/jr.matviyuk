import { MainInfoLayout } from '@/shared/layouts/MainInfoLayout';
import { Footer, Header, MainInfo, Nav } from '@/widgets';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <MainInfoLayout>
        <MainInfo/>
        <Nav/>
      </MainInfoLayout>
      <Footer/>
    </div>
  );
}
