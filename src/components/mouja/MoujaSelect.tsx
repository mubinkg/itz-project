"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

// Mock type for demonstration
type Mouja = {
  id: string
  name: string
}

export function MoujaSelect({
  mouzaData,
  value,
  setValue,
}: {
  mouzaData: Mouja[]
  value: any
  setValue: any
}) {
  const [open, setOpen] = React.useState(false)
  const frameworks = mouzaData.map((mouja) => ({
    label: mouja.name,
    value: mouja.id,
  }))

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setValue("")
    setOpen(false)
  }

  const selectedFramework = frameworks.find((framework) => framework.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          <span className="truncate">{selectedFramework ? selectedFramework.label : "মৌজা"}</span>
          <div className="flex items-center gap-1">
            {value && <X className="h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer" onClick={handleClear} />}
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command>
          <CommandInput placeholder="মৌজা খুঁজুন..." className="h-9" />
          <CommandList>
            <CommandEmpty>কোন মৌজা পাওয়া যায়নি</CommandEmpty>
            <CommandGroup>
              {value && (
                <>
                  <CommandItem
                    onSelect={() => {
                      setValue("")
                      setOpen(false)
                    }}
                    className="text-muted-foreground"
                  >
                    <X className="mr-2 h-4 w-4" />
                    নির্বাচন মুছুন
                  </CommandItem>
                  <Separator className="my-1" />
                </>
              )}
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check className={cn("ml-auto h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
