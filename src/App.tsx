
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, useState } from 'react'
import ProtectedRoute from './routes/ProtectedRoute'
const Login = lazy(() => import("./pages/login/index"))
const Dashbord = lazy(() => import("./pages/dashboard/index"))
const NotFound = lazy(() => import("./pages/notFound/index"))

function App() {
  const [token] = useState(false)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

       
        <Route element={<ProtectedRoute token={token} />}>
          <Route path="/dashbord" element={<Dashbord />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
