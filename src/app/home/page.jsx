/** @format */

import LogoutBtn from '@/components/LogoutBtn';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const Home = async () => {
  const session = await auth();
  if (!session?.user) redirect('/');
  return (
    <div>
      <p> Hello {session?.user?.name}, you've successfully signed in.</p>
      <LogoutBtn />
    </div>
  );
};

export default Home;
