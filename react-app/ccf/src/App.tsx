import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicantUsersDashboard from './applicant-dashboard/ApplicantDashboard';
import AdminProtectedRoute from './components/Routing/AdminProtectedRoute';
import TestLoginPage from './components/Routing/testSignInPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default/Login page */}
        <Route
          path="/" 
          element={
            <></>
          } 
        />
        <Route
          path="/login" 
          element={
            <TestLoginPage /> //Remove this later, testing for Route Protection - ryan
          } 
        />
        {/* 404 page */}
        <Route
          path="*" 
          element={
            <></>
          } 
        />
        <Route
          path="/forgot-password" 
          element={
            <></>
          } 
        />
        <Route
          path="/create-account" 
          element={
            <></>
          } 
        />        
        <Route
          path="/applicant-dashboard" 
          element={
            <ApplicantUsersDashboard />
          } 
        />        
        {/* Admin dashboard */}
        <Route
          path="/admin" 
          element={
            <AdminProtectedRoute element={<ApplicantUsersDashboard />} /> //Just testing with the Applicant dashboard page to test permissions, remove this - ryan
          } 
        />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
