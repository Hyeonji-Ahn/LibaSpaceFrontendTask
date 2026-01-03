// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import JobDetailsPage from './pages/JobDetailsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
