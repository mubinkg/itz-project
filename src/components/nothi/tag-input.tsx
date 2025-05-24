"use client"

import { useState, type KeyboardEvent } from "react"
import { X, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface InputTagsProps {
  value: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
}

export const InputTags = ({ value, onChange, placeholder = "টাইপ করুন এবং Enter চাপুন..." }: InputTagsProps) => {
  const [inputValue, setInputValue] = useState("")

  const addTag = () => {
    if (inputValue.trim() && !value.includes(inputValue.trim())) {
      onChange([...value, inputValue.trim()])
      setInputValue("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <Button type="button" onClick={addTag} size="sm" className="h-12 px-4 bg-sky-300 hover:bg-sky-500 rounded-xl">
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
            >
              {tag}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeTag(tag)}
                className="h-4 w-4 p-0 hover:bg-blue-300 rounded-full"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
