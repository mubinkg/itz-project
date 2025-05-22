'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function UpazilaSelect({
  upazilaList,
  value,
  setValue,
}: {
  upazilaList: { label: string; value: string }[];
  value: string;
  setValue: (v: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');

  const displayLabel =
    upazilaList.find(item => item.value === value)?.label || value || 'সার্কেল / উপজেলা';

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);
  };

  const handleCustomSubmit = () => {
    if (input.trim()) {
      setValue(input.trim());
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {displayLabel}
          <ChevronsUpDown className="opacity-50 ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="সার্কেল / উপজেলা খুঁজুন বা লিখুন..."
            className="h-9"
            value={input}
            onValueChange={setInput}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleCustomSubmit();
              }
            }}
          />
          <CommandList>
            {upazilaList.filter(item =>
              item.label.toLowerCase().includes(input.toLowerCase())
            ).length > 0 ? (
              <CommandGroup>
                {upazilaList
                  .filter(item =>
                    item.label.toLowerCase().includes(input.toLowerCase())
                  )
                  .map((item, idx) => (
                    <CommandItem
                      key={`${item.value}-${idx}`}
                      value={item.value}
                      onSelect={handleSelect}
                    >
                      {item.label}
                      <Check
                        className={cn(
                          'ml-auto',
                          value === item.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>
                <button
                  className="w-full text-left px-2 py-1.5 hover:bg-muted"
                  onClick={handleCustomSubmit}
                >
                  নতুন সার্কেল/উপজেলা যুক্ত করুন: <strong>{input}</strong>
                </button>
              </CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
