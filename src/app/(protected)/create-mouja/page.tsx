import { getActiveMoujas } from '@/actions/mouja';
import MoujaPage from './MoujaPage';
import { cookies } from 'next/headers';
import AccessDenied from '@/components/common/AccessDenied';

export default async function Page() {

  const cookieStore = await cookies();
  const role = cookieStore.get('user_vumi_role')?.value || '';

  // Block access if the role is 'USER'
  if (role === 'USER') {
    return <AccessDenied />;
  }
  
  const mouzaData = await getActiveMoujas();

  return (
    <MoujaPage mouzaData={mouzaData} />
  );
}
