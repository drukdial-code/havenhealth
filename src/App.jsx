import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AdminDashboard from './components/admin/AdminDashboard';
// import AdminLogin from './components/admin/AdminLogin';
// import './App.css'
import './styles/main.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
      </Routes>
    </Router>
  )
}

export default App
