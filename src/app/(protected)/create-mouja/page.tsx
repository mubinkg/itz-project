import { getActiveMoujas } from '@/actions/mouja';
import MoujaPage from './MoujaPage';

export default async function Page() {
  
  const mouzaData = await getActiveMoujas();

  return (
    <MoujaPage mouzaData={mouzaData} />
  );
}
