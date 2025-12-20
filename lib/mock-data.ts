export type CaseType = "regulatory" | "non-regulatory" | "legal"
export type CaseStatus = "new" | "in-progress" | "pending-review" | "approved" | "closed"
export type Stage = "intake" | "classification" | "assignment" | "investigation" | "response" | "closure"
export type Priority = "high" | "medium" | "low"

export interface Case {
  id: string
  caseNumber: string
  title: string
  type: CaseType
  status: CaseStatus
  priority: Priority
  currentStage: Stage
  assignedTo: string | null
  createdAt: string
  updatedAt: string
  dueDate: string
  slaStatus: "on-track" | "at-risk" | "overdue"
  aiConfidence: number
  description: string
  aiSuggestion?: string
  requiresApproval: boolean
  approvedBy?: string
  documents: string[]
}

export const mockCases: Case[] = [
  {
    id: "1",
    caseNumber: "REG-2025-001",
    title: "CFPB Compliance Review - Consumer Protection",
    type: "regulatory",
    status: "pending-review",
    priority: "high",
    currentStage: "response",
    assignedTo: "Sarah Chen",
    createdAt: "2025-01-10T09:00:00Z",
    updatedAt: "2025-01-15T14:30:00Z",
    dueDate: "2025-01-20T17:00:00Z",
    slaStatus: "at-risk",
    aiConfidence: 0.87,
    description:
      "CFPB inquiry regarding consumer protection practices for peer-to-peer payment disputes. Requires detailed response with policy documentation and transaction data analysis.",
    aiSuggestion:
      "Based on CFPB Regulation E, recommend providing comprehensive dispute resolution procedures and consumer notification policies.",
    requiresApproval: true,
    documents: ["cfpb_inquiry.pdf", "dispute_policies.pdf"],
  },
  {
    id: "2",
    caseNumber: "NR-2025-045",
    title: "Merchant Account Chargeback Dispute",
    type: "non-regulatory",
    status: "in-progress",
    priority: "medium",
    currentStage: "investigation",
    assignedTo: "Michael Torres",
    createdAt: "2025-01-14T11:20:00Z",
    updatedAt: "2025-01-16T09:15:00Z",
    dueDate: "2025-01-25T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.92,
    description:
      "Large merchant escalated chargeback dispute involving $45K in transactions. Reviewing transaction logs and merchant documentation.",
    requiresApproval: false,
    documents: ["chargeback_claim.pdf", "transaction_records.pdf"],
  },
  {
    id: "3",
    caseNumber: "LEG-2025-008",
    title: "Patent Litigation - Payment Processing Technology",
    type: "legal",
    status: "new",
    priority: "high",
    currentStage: "classification",
    assignedTo: null,
    createdAt: "2025-01-17T08:45:00Z",
    updatedAt: "2025-01-17T08:45:00Z",
    dueDate: "2025-01-24T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.78,
    description:
      "Received patent infringement claim regarding one-touch payment technology. Requires legal review and prior art analysis.",
    aiSuggestion:
      "Recommend immediate legal counsel consultation and comprehensive prior art search for mobile payment patents.",
    requiresApproval: true,
    documents: ["infringement_notice.pdf"],
  },
  {
    id: "4",
    caseNumber: "REG-2025-002",
    title: "FinCEN AML Compliance Audit",
    type: "regulatory",
    status: "in-progress",
    priority: "medium",
    currentStage: "investigation",
    assignedTo: "Sarah Chen",
    createdAt: "2025-01-12T10:00:00Z",
    updatedAt: "2025-01-17T16:20:00Z",
    dueDate: "2025-02-01T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.85,
    description:
      "FinCEN annual anti-money laundering compliance audit. Preparing transaction monitoring reports and SAR documentation.",
    requiresApproval: false,
    documents: ["aml_checklist.pdf", "previous_audit.pdf"],
  },
  {
    id: "5",
    caseNumber: "NR-2025-046",
    title: "API Integration Failure - Partner Platform",
    type: "non-regulatory",
    status: "new",
    priority: "low",
    currentStage: "intake",
    assignedTo: null,
    createdAt: "2025-01-17T14:30:00Z",
    updatedAt: "2025-01-17T14:30:00Z",
    dueDate: "2025-02-05T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.94,
    description:
      "Partner platform reported API integration issues affecting checkout experience. Technical investigation required.",
    requiresApproval: false,
    documents: ["api_error_logs.pdf"],
  },
  {
    id: "6",
    caseNumber: "REG-2025-003",
    title: "GDPR Data Subject Access Request",
    type: "regulatory",
    status: "in-progress",
    priority: "high",
    currentStage: "response",
    assignedTo: "Emily Wang",
    createdAt: "2025-01-13T15:00:00Z",
    updatedAt: "2025-01-16T10:00:00Z",
    dueDate: "2025-01-23T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.91,
    description:
      "EU user submitted GDPR data access request. Compiling transaction history, account data, and third-party sharing records.",
    aiSuggestion:
      "Ensure all data exports comply with GDPR Article 15 requirements and include all processing activities.",
    requiresApproval: true,
    documents: ["dsar_request.pdf", "user_data_export.pdf"],
  },
  {
    id: "7",
    caseNumber: "LEG-2025-009",
    title: "Terms of Service Violation - High-Risk Merchant",
    type: "legal",
    status: "pending-review",
    priority: "medium",
    currentStage: "investigation",
    assignedTo: "Robert Kim",
    createdAt: "2025-01-15T09:30:00Z",
    updatedAt: "2025-01-17T11:45:00Z",
    dueDate: "2025-01-28T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.88,
    description:
      "Merchant suspected of violating acceptable use policy through high-risk product sales. Legal review for account termination.",
    requiresApproval: true,
    documents: ["tos_violation_report.pdf", "merchant_activity.pdf"],
  },
  {
    id: "8",
    caseNumber: "REG-2025-004",
    title: "PSD2 Strong Customer Authentication Compliance",
    type: "regulatory",
    status: "new",
    priority: "high",
    currentStage: "intake",
    assignedTo: null,
    createdAt: "2025-01-16T13:00:00Z",
    updatedAt: "2025-01-16T13:00:00Z",
    dueDate: "2025-01-30T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.82,
    description:
      "European Banking Authority inquiry regarding PSD2 SCA implementation for PayPal checkout flows in EU region.",
    aiSuggestion: "Review current authentication flows and ensure compliance with RTS technical standards.",
    requiresApproval: true,
    documents: ["psd2_inquiry.pdf"],
  },
  {
    id: "9",
    caseNumber: "NR-2025-047",
    title: "High-Volume Merchant Integration Support",
    type: "non-regulatory",
    status: "in-progress",
    priority: "high",
    currentStage: "investigation",
    assignedTo: "Michael Torres",
    createdAt: "2025-01-14T16:00:00Z",
    updatedAt: "2025-01-17T12:00:00Z",
    dueDate: "2025-01-22T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.89,
    description:
      "Enterprise merchant experiencing payment failures during high-traffic checkout periods. Technical escalation required.",
    requiresApproval: false,
    documents: ["merchant_logs.pdf", "traffic_analysis.pdf"],
  },
  {
    id: "10",
    caseNumber: "LEG-2025-010",
    title: "Class Action Settlement - Fee Disclosure",
    type: "legal",
    status: "pending-review",
    priority: "high",
    currentStage: "response",
    assignedTo: "Robert Kim",
    createdAt: "2025-01-11T10:00:00Z",
    updatedAt: "2025-01-17T15:00:00Z",
    dueDate: "2025-01-27T17:00:00Z",
    slaStatus: "at-risk",
    aiConfidence: 0.75,
    description:
      "Class action settlement requires review of fee disclosure practices across all merchant agreements for past 3 years.",
    aiSuggestion: "Coordinate with legal counsel for settlement agreement review and merchant notification plan.",
    requiresApproval: true,
    approvedBy: "Legal Counsel",
    documents: ["settlement_agreement.pdf", "fee_disclosure_audit.pdf"],
  },
  {
    id: "11",
    caseNumber: "REG-2025-005",
    title: "SEC Cryptocurrency Custody Inquiry",
    type: "regulatory",
    status: "new",
    priority: "medium",
    currentStage: "classification",
    assignedTo: null,
    createdAt: "2025-01-17T09:00:00Z",
    updatedAt: "2025-01-17T09:00:00Z",
    dueDate: "2025-02-07T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.84,
    description:
      "SEC requesting information on cryptocurrency custody practices and consumer protection measures for digital assets.",
    requiresApproval: true,
    documents: ["sec_inquiry.pdf"],
  },
  {
    id: "12",
    caseNumber: "NR-2025-048",
    title: "Cross-Border Transaction Failure Investigation",
    type: "non-regulatory",
    status: "new",
    priority: "medium",
    currentStage: "intake",
    assignedTo: null,
    createdAt: "2025-01-16T11:30:00Z",
    updatedAt: "2025-01-16T11:30:00Z",
    dueDate: "2025-02-02T17:00:00Z",
    slaStatus: "on-track",
    aiConfidence: 0.91,
    description:
      "Multiple reports of failed cross-border payments between US and UK accounts. Investigating currency conversion and routing issues.",
    requiresApproval: false,
    documents: ["transaction_failures.pdf"],
  },
]

export const stages: { value: Stage; label: string }[] = [
  { value: "intake", label: "Intake" },
  { value: "classification", label: "Classification" },
  { value: "assignment", label: "Assignment" },
  { value: "investigation", label: "Investigation" },
  { value: "response", label: "Response" },
  { value: "closure", label: "Closure" },
]
