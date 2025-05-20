'use client';

import { deleteMouja } from '@/actions/mouja';
import { useRouter } from 'next/navigation';
import React from 'react';

const Delete = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <p
      onClick={async () => {
        await deleteMouja(id);
        router.refresh();
      }}
      className="text-red-500 hover:underline"
    >
      Delete
    </p>
  );
};

export default Delete;
