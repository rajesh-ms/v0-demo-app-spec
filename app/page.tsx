"use client"

import { TrendingDashboard } from "@/components/trending-dashboard"
import { PayPalHeader } from "@/components/paypal-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <PayPalHeader />

      <main className="mx-auto max-w-[1600px] px-3 py-2 sm:px-4 lg:px-6">
        <TrendingDashboard />
      </main>
    </div>
  )
}
