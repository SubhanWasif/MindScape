import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/LandingPage";
import AboutPage from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import EEG2TEXT from "./components/EEG2Text";
import EEG2IMAGE from "./components/EEG2Image";
import { AuthProvider } from "./util/AuthContext";
import ProtectedRoute from "./util/ProtectedRoute";
import MeetTheTeam from "./components/MeetTeam";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/landingpage" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meettheteam" element={<MeetTheTeam />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/EEGtoText"
            element={
              <ProtectedRoute>
                <EEG2TEXT />
              </ProtectedRoute>
            }
          />
          <Route
            path="/EEGtoImage"
            element={
              <ProtectedRoute>
                <EEG2IMAGE />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
