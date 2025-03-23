import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import MainPage from "./pages/Mainpage";
import SignUpPage from "./pages/SignUpPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />


        {/* Main Page */}
        <Route path="/main" element={<MainPage />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
