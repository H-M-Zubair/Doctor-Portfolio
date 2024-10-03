import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuRadioGroupDemoProps {
  selectedDuration: string;
  onDurationChange: (value: string) => void;
  required?: boolean; // Optional, but can be used for styling or logic
}

export function DropdownMenuRadioGroupDemo({
  selectedDuration,
  onDurationChange,
  required = false, // Default to false if not provided
}: DropdownMenuRadioGroupDemoProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Time</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select minutes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedDuration}
          onValueChange={onDurationChange}
        >
          <DropdownMenuRadioItem value="15 minutes">15 minutes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="30 minutes">30 minutes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="45 minutes">45 minutes</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="60 minutes">60 minutes</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        {required && !selectedDuration && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
