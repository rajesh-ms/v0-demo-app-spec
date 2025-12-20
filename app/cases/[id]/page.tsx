"use client"

import { use } from "react"
import { useState } from "react"
import { mockCases } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Clock, AlertTriangle, CheckCircle2, FileText, User, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import { StageTimeline } from "@/components/stage-timeline"
import { ConfidenceIndicator } from "@/components/confidence-indicator"
import { ApprovalWorkflow } from "@/components/approval-workflow"

export default function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const caseData = mockCases.find((c) => c.id === id)
  const [response, setResponse] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!caseData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Case Not Found</h2>
          <p className="text-muted-foreground mb-4">The case you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/">Back to Cases</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleUseAISuggestion = () => {
    if (caseData.aiSuggestion) {
      setResponse(caseData.aiSuggestion)
    }
  }

  const handleSubmitResponse = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Response submitted successfully!")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "in-progress":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "pending-review":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "approved":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "closed":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "regulatory":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "non-regulatory":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "legal":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
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
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cases
            </Link>
          </Button>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{caseData.caseNumber}</h1>
                <Badge variant="outline" className={getTypeColor(caseData.type)}>
                  {caseData.type}
                </Badge>
                <Badge variant="outline" className={getStatusColor(caseData.status)}>
                  {caseData.status}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">{caseData.title}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <StageTimeline currentStage={caseData.currentStage} />

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="response">Response</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Case Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{caseData.description}</p>
                  </CardContent>
                </Card>

                {caseData.aiSuggestion && (
                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <CardTitle>AI Suggestion</CardTitle>
                      </div>
                      <CardDescription>AI-generated recommendation based on similar cases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{caseData.aiSuggestion}</p>
                      <ConfidenceIndicator confidence={caseData.aiConfidence} />
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="response" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Draft Response</CardTitle>
                    <CardDescription>
                      Prepare your response to this case.{" "}
                      {caseData.requiresApproval && "This case requires approval before submission."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {caseData.aiSuggestion && (
                      <Button
                        variant="outline"
                        onClick={handleUseAISuggestion}
                        className="w-full sm:w-auto bg-transparent"
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Use AI Suggestion
                      </Button>
                    )}
                    <Textarea
                      placeholder="Enter your response here..."
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      className="min-h-[300px]"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleSubmitResponse} disabled={!response || isSubmitting}>
                        {isSubmitting
                          ? "Submitting..."
                          : caseData.requiresApproval
                            ? "Submit for Approval"
                            : "Submit Response"}
                      </Button>
                      <Button variant="outline">Save Draft</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Attached Documents</CardTitle>
                    <CardDescription>Documents related to this case</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {caseData.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer"
                        >
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <span className="flex-1 text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Case Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Assigned To</p>
                    <p className="text-sm text-muted-foreground">{caseData.assignedTo || "Unassigned"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Due Date</p>
                    <p className="text-sm text-muted-foreground">{new Date(caseData.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getSLAIcon()}
                  <div className="flex-1">
                    <p className="text-sm font-medium">SLA Status</p>
                    <p className="text-sm text-muted-foreground capitalize">{caseData.slaStatus.replace("-", " ")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Priority</p>
                    <Badge variant="outline" className="capitalize">
                      {caseData.priority}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {caseData.requiresApproval && (
              <ApprovalWorkflow requiresApproval={caseData.requiresApproval} approvedBy={caseData.approvedBy} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
