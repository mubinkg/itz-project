'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createMouja, updateMouja } from '@/actions/mouja';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const CreateMoujaForm = ({
  editData,
  onFinishEdit,
}: {
  editData?: { id: string; name: string; jlNo: string } | null;
  onFinishEdit?: () => void;
}) => {
  const [name, setName] = useState('');
  const [jlNo, setJlNo] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log('Edit Data:', editData);
    if (editData) {
      setEditingId(editData.id);
      setName(editData.name || '');
      setJlNo(editData.jlNo || '');
    } else {
      setEditingId(null);
      setName('');
      setJlNo('');
    }
  }, [editData]);

  const handleSubmit = async () => {
    if (editingId) {
      // Update Mouja
      const res = await updateMouja({ id: editingId, name, jlNo });
      if (res.success) {
        toast.success(res.message || "মৌজা সফলভাবে আপডেট হয়েছে");
        if (onFinishEdit) onFinishEdit();
      } else {
        toast.error(res.message || "মৌজা আপডেট করতে সমস্যা হয়েছে");
      }
    } else {
      // Create Mouja
      const res = await createMouja({ name, jlNo });
      if (res.success) {
        toast.success(res.message || "মৌজা সফলভাবে তৈরি হয়েছে");
        router.refresh();
      } else {
        toast.error(res.message || "মৌজা তৈরি করতে সমস্যা হয়েছে");
      }
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-6"
    >
      <div className='flex flex-col gap-1'>
        <label className="block text-sm font-medium text-gray-700">
          মৌজার নাম
        </label>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="মৌজার নাম লিখুন"
          required
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label className="block text-sm font-medium text-gray-700">
          জে.এল. নং
        </label>
        <Input
          value={jlNo}
          onChange={e => setJlNo(e.target.value)}
          placeholder="জে.এল. নং লিখুন"
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        {editingId && (
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setEditingId(null);
              setName('');
              setJlNo('');
              if (onFinishEdit) onFinishEdit();
            }}
          >
            বাতিল করুন
          </Button>
        )}
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          {editingId ? 'আপডেট করুন' : 'সংরক্ষণ করুন'}
        </Button>
      </div>
    </form>
  );
};

export default CreateMoujaForm;
