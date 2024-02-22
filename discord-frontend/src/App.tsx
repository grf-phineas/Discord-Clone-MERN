import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from "./authPages/LoginPage/LoginPage"
import RegisterPage from "./authPages/RegisterPage/RegisterPage"
import DashBoard from "./Dashboard/Dashboard"
import AlertNotification from "./shared/components/AlertNotification"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
