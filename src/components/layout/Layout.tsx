import type { ReactNode } from "react"
import Header from "./Header"

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen bg-gray-300 w-full">
      <Header />
      <h1>Layout</h1>
      {children}
    </div>
  )
}

export default Layout
