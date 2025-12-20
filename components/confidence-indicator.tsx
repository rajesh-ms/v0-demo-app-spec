import { Progress } from "@/components/ui/progress"
import { Sparkles } from "lucide-react"

interface ConfidenceIndicatorProps {
  confidence: number
}

export function ConfidenceIndicator({ confidence }: ConfidenceIndicatorProps) {
  const percentage = Math.round(confidence * 100)

  const getConfidenceColor = () => {
    if (confidence >= 0.8) return "text-green-500"
    if (confidence >= 0.6) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className={`h-4 w-4 ${getConfidenceColor()}`} />
          <span className="text-sm font-medium">AI Confidence</span>
        </div>
        <span className={`text-sm font-bold ${getConfidenceColor()}`}>{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
      <p className="text-xs text-muted-foreground">
        {confidence >= 0.8 && "High confidence - Ready for review"}
        {confidence >= 0.6 && confidence < 0.8 && "Moderate confidence - Manual review recommended"}
        {confidence < 0.6 && "Low confidence - Requires expert review"}
      </p>
    </div>
  )
}
