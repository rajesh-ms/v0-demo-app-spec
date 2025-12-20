export function PayPalHeader() {
  return (
    <header className="border-b bg-gradient-to-r from-[#0070BA] to-[#003087]">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.905 7.915c-.419 2.684-1.85 4.538-4.227 5.265-1.442.442-3.025.663-4.608.663H10.8l-.884 5.604c-.052.331-.3.553-.631.553H6.758c-.331 0-.579-.276-.526-.607l2.128-13.43c.052-.331.3-.553.631-.553h5.346c2.324 0 4.175.387 5.502 1.218 1.327.831 1.982 2.213 1.982 4.175 0 .387-.026.774-.105 1.16-.026.166-.053.332-.105.498"
                fill="#009CDE"
              />
              <path
                d="M8.859 8.41H13.1c1.85 0 3.287.276 4.28.884.993.608 1.49 1.6 1.49 3.025 0 .276-.026.553-.079.829-.473 2.95-2.076 4.421-4.834 4.421H12.05l-.789 4.975H8.122l1.737-14.134z"
                fill="#012169"
              />
              <path
                d="M14.058 3.41c1.85 0 3.287.276 4.28.884.993.608 1.49 1.6 1.49 3.025 0 .276-.026.553-.079.829-.473 2.95-2.076 4.421-4.834 4.421H13.01l-.789 4.975H9.081L10.818 3.41h3.24z"
                fill="#003087"
              />
            </svg>
            <div>
              <h1 className="text-lg font-bold text-white">PayPal</h1>
              <p className="text-[10px] text-white/90">Case Management System</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/90">Regulatory & Legal Compliance</p>
            <p className="text-[9px] text-white/70">Powered by AI</p>
          </div>
        </div>
      </div>
    </header>
  )
}
