"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockCases } from "@/lib/mock-data"
import { AlertCircle, FileText, Scale, TrendingUp } from "lucide-react"
import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function DashboardStats() {
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const recentCases = mockCases.filter((c) => {
    const caseDate = new Date(c.createdAt)
    return caseDate >= oneWeekAgo
  })

  const regulatoryCount = recentCases.filter((c) => c.type === "regulatory").length
  const nonRegulatoryCount = recentCases.filter((c) => c.type === "non-regulatory").length
  const legalCount = recentCases.filter((c) => c.type === "legal").length

  const pieData = [
    { name: "Regulatory", value: regulatoryCount, color: "#E74C3C" },
    { name: "Non-Regulatory", value: nonRegulatoryCount, color: "#009CDE" },
    { name: "Legal", value: legalCount, color: "#F39C12" },
  ]

  const totalCases = recentCases.length

  return (
    <div className="space-y-3">
      <div className="grid gap-3">
        <Card className="bg-gradient-to-br from-[#0070BA] to-[#003087] text-white border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-3 px-4">
            <CardTitle className="text-xs font-medium text-white/90">Total Cases (7 Days)</CardTitle>
            <TrendingUp className="h-4 w-4 text-white/80" />
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className="text-2xl font-bold">{totalCases}</div>
            <p className="text-xs text-white/70 mt-0.5">Past week activity</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#E74C3C] to-[#C0392B] text-white border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-3 px-4">
            <CardTitle className="text-xs font-medium text-white/90">Regulatory</CardTitle>
            <AlertCircle className="h-4 w-4 text-white/80" />
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className="text-2xl font-bold">{regulatoryCount}</div>
            <p className="text-xs text-white/70 mt-0.5">CFPB, FinCEN, GDPR cases</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#009CDE] to-[#006BA6] text-white border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-3 px-4">
            <CardTitle className="text-xs font-medium text-white/90">Non-Regulatory</CardTitle>
            <FileText className="h-4 w-4 text-white/80" />
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className="text-2xl font-bold">{nonRegulatoryCount}</div>
            <p className="text-xs text-white/70 mt-0.5">Merchant & operational cases</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#F39C12] to-[#D68910] text-white border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-3 px-4">
            <CardTitle className="text-xs font-medium text-white/90">Legal</CardTitle>
            <Scale className="h-4 w-4 text-white/80" />
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <div className="text-2xl font-bold">{legalCount}</div>
            <p className="text-xs text-white/70 mt-0.5">Litigation & IP matters</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-gradient-to-r from-[#0070BA]/5 to-[#003087]/5 py-3 px-4">
          <CardTitle className="text-[#003087] text-sm">Case Distribution</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 pb-3 px-4">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name.split(" ")[0]} ${(percent * 100).toFixed(0)}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
