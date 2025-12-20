import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"

interface ApprovalWorkflowProps {
  requiresApproval: boolean
  approvedBy?: string
}

export function ApprovalWorkflow({ requiresApproval, approvedBy }: ApprovalWorkflowProps) {
  if (!requiresApproval) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Approval Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {approvedBy ? (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Approved</p>
                <p className="text-xs text-muted-foreground">By {approvedBy}</p>
              </div>
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                Approved
              </Badge>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Pending Approval</p>
                <p className="text-xs text-muted-foreground">Requires legal review</p>
              </div>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                Pending
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
