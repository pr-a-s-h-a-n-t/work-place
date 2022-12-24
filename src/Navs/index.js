import React from 'react';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AuthPage from '../Components/pages/AuthPage';
import LandingPage from '../Components/LandingPage';
import CandidateApplications from '../Components/pages/candidate/CandidateApplications';
import CandidateConversation from '../Components/pages/candidate/CandidateConversation';
import CandidateJobs from '../Components/pages/candidate/CandidateJobs';
import CandidateOnboarding from '../Components/pages/candidate/CandidateOnboarding';
import CandidateProfile from '../Components/pages/candidate/CandidateProfile';
import EmployerApplications from '../Components/pages/employer/EmployerApplications';
import EmployerConversations from '../Components/pages/employer/EmployerConversations';
import EmployerJobs from '../Components/pages/employer/EmployerJobs';
import EmployerOnboarding from '../Components/pages/employer/employerOnboarding/index';
import EmployerProfile from '../Components/pages/employer/EmployerProfile';

function Navs() {

    const ProtectedCandidateRoute = () => {
        if (true) {
            return <Outlet />
        }
        else {
            return <Navigate to="./candidate/auth" />
        }
    }
    const ProtectedEmployerRoute = () => {
        if (true) {
            return <Outlet />
        }
        else {
            return <Navigate to="./employer/auth" />
        }
    }

    return (
        <Router>
            <Routes >
                <Route path='/' element={<LandingPage />} />
                {/* <Route path='/auth' element={<AuthPage />} /> */}
                {/* candidate route */}
                <Route path='/candidate/auth' element={<AuthPage  type="candidate" />} />

                {/* we dont want user to access the Candidate profile, Candidate jobs,Candidate application and Candidate conversations section without login */}
                {/* to achieve this functionality we are going to use   PROTECTED ROUTE */}
                <Route element={<ProtectedCandidateRoute />}>
                    <Route
                        path='/candidate/onboarding'
                        element={<CandidateOnboarding />}
                    />
                    <Route
                        path='/candidate/profile'
                        element={<CandidateProfile />}
                    />
                    <Route
                        path='/candidate/jobs'
                        element={<CandidateJobs />}
                    />
                    <Route
                        path='/candidate/applications'
                        element={<CandidateApplications />}
                    />
                    <Route
                        path='/candidate/conversations'
                        element={<CandidateConversation />}
                    />

                </Route>

                {/* employer route */}
                <Route path='/employer/auth' element={<AuthPage type="employer" />} />

                 {/* we dont want user to access the employer profile, employer   jobs,employer application and employer conversations section without login */}
                {/* to achieve this functionality we are going to use   PROTECTED ROUTE */}
                

                <Route element={<ProtectedEmployerRoute />}>
                    <Route
                        path='/employer/onboarding'
                        element={<EmployerOnboarding />}
                    />
                    <Route
                        path='/employer/profile'
                        element={<EmployerProfile />}
                    />
                    <Route
                        path='/employer/jobs'
                        element={<EmployerJobs />}
                    />
                    <Route
                        path='/employer/applications'
                        element={<EmployerApplications />}
                    />
                    <Route
                        path='/employer/conversations'
                        element={<EmployerConversations />}
                    />
                </Route>
            </Routes>
        </Router>
    )
}

export default Navs;
