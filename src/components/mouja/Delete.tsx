'use client';

import { useState } from "react"
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteMouja } from '@/actions/mouja';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

const Delete = ({ id }: { id: string }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteMouja(id)
      toast.success("মৌজা সফলভাবে মুছে ফেলা হয়েছে")
      router.refresh()
    } catch (error) {
      console.error("Error deleting mouja:", error)
      toast.error("মৌজা মুছতে সমস্যা হয়েছে")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50">
          <Trash2 className="h-4 w-4" />
        </Button> */}

        <Button
          size="icon"
          variant="destructive"
          title="ডিলিট করুন"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>আপনি কি নিশ্চিত?</AlertDialogTitle>
          <AlertDialogDescription>
            এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না। এটি স্থায়ীভাবে মৌজা মুছে ফেলবে।
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>বাতিল</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete} 
            disabled={isDeleting} 
            className="bg-red-600 hover:bg-red-700"
          >
            {isDeleting ? "মুছে ফেলা হচ্ছে..." : "মুছে ফেলুন"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Delete;