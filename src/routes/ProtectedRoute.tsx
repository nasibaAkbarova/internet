import { Navigate, Outlet } from "react-router-dom"
import Layout from "../components/layout/Layout"

function ProtectedRoute({ token }: { token: boolean }) {
  if (token) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    )
  }
  return <Navigate to="/login" />
}

export default ProtectedRoute
