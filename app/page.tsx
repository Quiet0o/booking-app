import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbars/Navbar';
import getCurrentUser from './actions/getCurrentUser';

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentUser} />
      <div className="pb-20 pt-28">
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
        </main>
      </div>
    </>
  );
}
