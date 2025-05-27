"use client"

import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditProps {
  id: string
  name: string
  jlNo: string
  onEdit: (data: { id: string; name: string; jlNo: string }) => void
}

export default function EditButton({ id, name, jlNo, onEdit }: EditProps) {
  const handleEdit = () => {
    onEdit({ id, name, jlNo })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
      onClick={handleEdit}
    >
      <Edit className="h-4 w-4" />
    </Button>
  )
}
