import type { Case } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, User, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"

interface CaseCardProps {
  caseData: Case
}

export function CaseCard({ caseData }: CaseCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-[#0070BA]/10 text-[#0070BA] border-[#0070BA]/30 font-medium"
      case "in-progress":
        return "bg-[#FFC439]/20 text-[#9B6700] border-[#FFC439]/40 font-medium"
      case "pending-review":
        return "bg-[#9B51E0]/10 text-[#9B51E0] border-[#9B51E0]/30 font-medium"
      case "approved":
        return "bg-[#2ECC71]/10 text-[#27AE60] border-[#2ECC71]/30 font-medium"
      case "closed":
        return "bg-slate-500/10 text-slate-700 border-slate-400/30 font-medium"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20 font-medium"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "regulatory":
        return "bg-[#E74C3C]/10 text-[#C0392B] border-[#E74C3C]/30 font-semibold"
      case "non-regulatory":
        return "bg-[#009CDE]/10 text-[#006BA6] border-[#009CDE]/30 font-semibold"
      case "legal":
        return "bg-[#F39C12]/10 text-[#D68910] border-[#F39C12]/30 font-semibold"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20 font-semibold"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-[#E74C3C] bg-[#E74C3C]/5 shadow-[#E74C3C]/10"
      case "medium":
        return "border-l-[#F39C12] bg-[#F39C12]/5 shadow-[#F39C12]/10"
      case "low":
        return "border-l-[#95A5A6] bg-slate-50 shadow-slate-200"
      default:
        return ""
    }
  }

  const getSLAIcon = () => {
    switch (caseData.slaStatus) {
      case "on-track":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "at-risk":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  return (
    <Link href={`/cases/${caseData.id}`}>
      <Card
        className={`hover:shadow-lg transition-all cursor-pointer border-l-4 ${getPriorityColor(caseData.priority)}`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-lg font-semibold">{caseData.caseNumber}</h3>
                <Badge variant="outline" className={getTypeColor(caseData.type)}>
                  {caseData.type}
                </Badge>
                <Badge variant="outline" className={getStatusColor(caseData.status)}>
                  {caseData.status}
                </Badge>
              </div>
              <p className="text-muted-foreground font-medium">{caseData.title}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{caseData.assignedTo || "Unassigned"}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>Due {new Date(caseData.dueDate).toLocaleDateString()}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {getSLAIcon()}
              <span className="capitalize">{caseData.slaStatus.replace("-", " ")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="font-medium">Stage:</span>
              <span className="capitalize">{caseData.currentStage}</span>
            </div>

            {caseData.aiConfidence && (
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>AI: {Math.round(caseData.aiConfidence * 100)}%</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
