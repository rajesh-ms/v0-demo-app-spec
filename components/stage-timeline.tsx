import { stages, type Stage } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

interface StageTimelineProps {
  currentStage: Stage
}

export function StageTimeline({ currentStage }: StageTimelineProps) {
  const currentIndex = stages.findIndex((s) => s.value === currentStage)

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative">
          <div className="flex items-center justify-between">
            {stages.map((stage, index) => {
              const isCompleted = index < currentIndex
              const isCurrent = index === currentIndex
              const isUpcoming = index > currentIndex

              return (
                <div key={stage.value} className="flex flex-col items-center flex-1 relative">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isCompleted
                        ? "bg-green-500 border-green-500"
                        : isCurrent
                          ? "bg-primary border-primary"
                          : "bg-background border-muted-foreground/30"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    ) : isCurrent ? (
                      <Circle className="h-5 w-5 text-primary-foreground fill-current" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground/30" />
                    )}
                  </div>

                  <p
                    className={`mt-2 text-xs font-medium text-center ${
                      isCurrent ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {stage.label}
                  </p>

                  {index < stages.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-5 w-full h-0.5 -z-10 ${
                        isCompleted ? "bg-green-500" : "bg-muted-foreground/30"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
