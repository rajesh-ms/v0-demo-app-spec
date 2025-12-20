"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Minus, TrendingUp, CheckCircle2, Clock } from "lucide-react"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const trendingData = [
  { date: "Week 1", regulatory: 8, nonRegulatory: 12, legal: 5 },
  { date: "Week 2", regulatory: 11, nonRegulatory: 15, legal: 7 },
  { date: "Week 3", regulatory: 9, nonRegulatory: 10, legal: 6 },
  { date: "Week 4", regulatory: 14, nonRegulatory: 18, legal: 9 },
]

const categoryTrends = [
  {
    category: "Regulatory Complaints",
    current: 14,
    previous: 9,
    trend: "up" as const,
    change: 55.6,
    topIssues: ["CFPB Compliance", "GDPR Requests", "AML Audits"],
    color: "#E74C3C",
  },
  {
    category: "Non-Regulatory Issues",
    current: 18,
    previous: 15,
    trend: "up" as const,
    change: 20.0,
    topIssues: ["Merchant Disputes", "API Failures", "Account Issues"],
    color: "#009CDE",
  },
  {
    category: "Legal Requests",
    current: 9,
    previous: 7,
    trend: "up" as const,
    change: 28.6,
    topIssues: ["Patent Litigation", "TOS Violations", "Contract Disputes"],
    color: "#F39C12",
  },
]

const topComplaints = [
  { name: "Payment Disputes", count: 24, type: "Non-Regulatory" },
  { name: "CFPB Compliance", count: 18, type: "Regulatory" },
  { name: "GDPR Requests", count: 16, type: "Regulatory" },
  { name: "API Integration", count: 14, type: "Non-Regulatory" },
  { name: "Patent Claims", count: 12, type: "Legal" },
  { name: "Merchant Violations", count: 10, type: "Non-Regulatory" },
]

const topRegulatoryComplaints = [
  { rank: 1, title: "CFPB Consumer Protection Inquiries", count: 18, trend: "+12%" },
  { rank: 2, title: "GDPR Data Subject Access Requests", count: 16, trend: "+8%" },
  { rank: 3, title: "FinCEN AML Compliance Audits", count: 14, trend: "+5%" },
  { rank: 4, title: "PSD2 Strong Customer Authentication", count: 12, trend: "+15%" },
  { rank: 5, title: "SEC Cryptocurrency Custody Reviews", count: 9, trend: "+3%" },
]

const topNonRegulatoryComplaints = [
  { rank: 1, title: "Merchant Account Chargeback Disputes", count: 24, trend: "+20%" },
  { rank: 2, title: "API Integration Failures", count: 19, trend: "+7%" },
  { rank: 3, title: "Cross-Border Transaction Issues", count: 17, trend: "+11%" },
  { rank: 4, title: "Payment Processing Delays", count: 15, trend: "+4%" },
  { rank: 5, title: "Account Access & Security Issues", count: 13, trend: "+9%" },
]

const topLegalRequests = [
  { rank: 1, title: "Patent Infringement Claims", count: 12, trend: "+18%" },
  { rank: 2, title: "Terms of Service Violation Reviews", count: 10, trend: "+6%" },
  { rank: 3, title: "Class Action Settlement Reviews", count: 9, trend: "+12%" },
  { rank: 4, title: "Trademark Dispute Cases", count: 7, trend: "+5%" },
  { rank: 5, title: "Contract Breach Investigations", count: 6, trend: "+8%" },
]

const overallStats = {
  openCases: {
    regulatory: 8,
    nonRegulatory: 15,
    legal: 6,
    total: 29,
  },
  closedLast30Days: 47,
}

export function TrendingDashboard() {
  return (
    <div className="space-y-2">
      <div className="grid gap-2 grid-cols-8">
        <Card className="shadow-md border-l-4 border-l-[#003087]">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#003087]" />
              <div>
                <div className="text-[9px] text-muted-foreground font-medium">Total Open</div>
                <div className="text-lg font-bold text-[#003087]">{overallStats.openCases.total}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-l-4 border-l-[#E74C3C]">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#E74C3C]" />
              <div>
                <div className="text-[9px] text-muted-foreground font-medium">Open Regulatory</div>
                <div className="text-lg font-bold text-[#E74C3C]">{overallStats.openCases.regulatory}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-l-4 border-l-[#009CDE]">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#009CDE]" />
              <div>
                <div className="text-[9px] text-muted-foreground font-medium">Open Non-Reg</div>
                <div className="text-lg font-bold text-[#009CDE]">{overallStats.openCases.nonRegulatory}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-l-4 border-l-[#F39C12]">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#F39C12]" />
              <div>
                <div className="text-[9px] text-muted-foreground font-medium">Open Legal</div>
                <div className="text-lg font-bold text-[#F39C12]">{overallStats.openCases.legal}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-l-4 border-l-green-600">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <div>
                <div className="text-[9px] text-muted-foreground font-medium">Closed (30d)</div>
                <div className="text-lg font-bold text-green-600">{overallStats.closedLast30Days}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {categoryTrends.map((item) => (
          <Card key={item.category} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-2">
              <div className="text-[9px] text-muted-foreground font-medium mb-1">{item.category}</div>
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold" style={{ color: item.color }}>
                  {item.current}
                </div>
                <div
                  className={`flex items-center gap-0.5 text-[9px] font-medium ${
                    item.trend === "up" ? "text-red-600" : item.trend === "down" ? "text-green-600" : "text-gray-600"
                  }`}
                >
                  {item.trend === "up" && <ArrowUp className="h-2.5 w-2.5" />}
                  {item.trend === "down" && <ArrowDown className="h-2.5 w-2.5" />}
                  {item.trend === "stable" && <Minus className="h-2.5 w-2.5" />}
                  {item.change.toFixed(1)}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Card className="shadow-md">
          <CardHeader className="bg-gradient-to-r from-[#0070BA]/5 to-[#003087]/5 py-1.5 px-2">
            <CardTitle className="text-[#003087] text-[10px]">Volume Trends (4 Weeks)</CardTitle>
          </CardHeader>
          <CardContent className="pt-2 pb-1 px-2">
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={trendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 9 }} />
                <YAxis tick={{ fontSize: 9 }} />
                <Tooltip contentStyle={{ fontSize: "10px" }} />
                <Legend wrapperStyle={{ fontSize: "9px" }} />
                <Line type="monotone" dataKey="regulatory" stroke="#E74C3C" strokeWidth={2} name="Regulatory" />
                <Line type="monotone" dataKey="nonRegulatory" stroke="#009CDE" strokeWidth={2} name="Non-Reg" />
                <Line type="monotone" dataKey="legal" stroke="#F39C12" strokeWidth={2} name="Legal" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="bg-gradient-to-r from-[#0070BA]/5 to-[#003087]/5 py-1.5 px-2">
            <CardTitle className="text-[#003087] text-[10px]">Top Categories (30 Days)</CardTitle>
          </CardHeader>
          <CardContent className="pt-2 pb-1 px-2">
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={topComplaints} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fontSize: 9 }} />
                <YAxis dataKey="name" type="category" width={90} tick={{ fontSize: 8 }} />
                <Tooltip contentStyle={{ fontSize: "10px" }} />
                <Bar dataKey="count" fill="#0070BA" name="Cases" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-2 grid-cols-3">
        <Card className="shadow-md border-l-4 border-l-[#E74C3C]">
          <CardHeader className="bg-gradient-to-br from-[#E74C3C]/10 to-transparent pb-1.5 pt-2 px-2">
            <CardTitle className="text-[#E74C3C] flex items-center gap-1.5 text-[10px]">
              <TrendingUp className="h-3.5 w-3.5" />
              Top 5 Regulatory
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-1.5 pb-2 px-2">
            <div className="space-y-1.5">
              {topRegulatoryComplaints.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-start gap-1.5 p-1.5 rounded-lg bg-gradient-to-r from-[#E74C3C]/5 to-transparent hover:from-[#E74C3C]/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#E74C3C] text-white flex items-center justify-center text-[9px] font-bold">
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-medium text-foreground leading-tight">{item.title}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[8px] font-semibold text-[#E74C3C]">{item.count}</span>
                      <span className="text-[8px] text-green-600 font-medium">{item.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-l-4 border-l-[#009CDE]">
          <CardHeader className="bg-gradient-to-br from-[#009CDE]/10 to-transparent pb-1.5 pt-2 px-2">
            <CardTitle className="text-[#009CDE] flex items-center gap-1.5 text-[10px]">
              <TrendingUp className="h-3.5 w-3.5" />
              Top 5 Non-Regulatory
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-1.5 pb-2 px-2">
            <div className="space-y-1.5">
              {topNonRegulatoryComplaints.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-start gap-1.5 p-1.5 rounded-lg bg-gradient-to-r from-[#009CDE]/5 to-transparent hover:from-[#009CDE]/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#009CDE] text-white flex items-center justify-center text-[9px] font-bold">
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-medium text-foreground leading-tight">{item.title}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[8px] font-semibold text-[#009CDE]">{item.count}</span>
                      <span className="text-[8px] text-green-600 font-medium">{item.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-l-4 border-l-[#F39C12]">
          <CardHeader className="bg-gradient-to-br from-[#F39C12]/10 to-transparent pb-1.5 pt-2 px-2">
            <CardTitle className="text-[#F39C12] flex items-center gap-1.5 text-[10px]">
              <TrendingUp className="h-3.5 w-3.5" />
              Top 5 Legal
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-1.5 pb-2 px-2">
            <div className="space-y-1.5">
              {topLegalRequests.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-start gap-1.5 p-1.5 rounded-lg bg-gradient-to-r from-[#F39C12]/5 to-transparent hover:from-[#F39C12]/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#F39C12] text-white flex items-center justify-center text-[9px] font-bold">
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-medium text-foreground leading-tight">{item.title}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[8px] font-semibold text-[#F39C12]">{item.count}</span>
                      <span className="text-[8px] text-green-600 font-medium">{item.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
