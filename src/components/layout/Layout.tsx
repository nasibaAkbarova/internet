import type { ReactNode } from "react"
import Header from "./Header"
import Saitbar from "./Saitbar"

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen bg-gray-300 w-full flex flex-col">
     
      <Header />

    
      <div className="p-4 flex gap-4 ">
        <Saitbar />
        <div className="bg-blue-700 flex rounded-md p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
