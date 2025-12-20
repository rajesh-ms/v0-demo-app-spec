"use client"

import type { CaseType, CaseStatus, Priority } from "@/lib/mock-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CaseFiltersProps {
  selectedType: CaseType | "all"
  selectedStatus: CaseStatus | "all"
  selectedPriority: Priority | "all"
  onTypeChange: (value: CaseType | "all") => void
  onStatusChange: (value: CaseStatus | "all") => void
  onPriorityChange: (value: Priority | "all") => void
}

export function CaseFilters({
  selectedType,
  selectedStatus,
  selectedPriority,
  onTypeChange,
  onStatusChange,
  onPriorityChange,
}: CaseFiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <Select value={selectedType} onValueChange={onTypeChange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="regulatory">Regulatory</SelectItem>
          <SelectItem value="non-regulatory">Non-Regulatory</SelectItem>
          <SelectItem value="legal">Legal</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedStatus} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="pending-review">Pending Review</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedPriority} onValueChange={onPriorityChange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Priority</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
