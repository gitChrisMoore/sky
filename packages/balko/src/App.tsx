import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Contexts
import { AuthProvider } from '@sky/manatee';

// Auth
import LoginPage from './routes/Auth/Login/LoginPage';
import SignupPage from './routes/Auth/Signup/SignupPage';

// Enroll
import PrimaryAddressPage from './routes/Enroll/PrimaryAddress/PrimaryAddressPage';
import PersonalDetailsPage from './routes/Enroll/PersonalDetails/PersonalDetailsPage';
import PhoneContactPage from './routes/Enroll/PhoneContact/PhoneContactPage';
import EnrollDecisionPage from './routes/Enroll/EnrollDecision/EnrollDecisionPage';

// App
import Account from './routes/App/Account/Account';
import Dashboard from './routes/App/Dashboard/Dashboard';
import Profile from './routes/App/Profile/Profile';
import Scan from './routes/App/Scan/Scan';
import OpenAccountPage from './routes/App/OpenAccount/OpenAccountPage';
// App: Employee
import Sale from './routes/App/Sale/Sale';

function App() {
    return (
        //
        <div>
            {' '}
            <Router>
                <AuthProvider>
                    <Routes>
                        {/* Default Route */}
                        <Route path="*" element={<LoginPage />} />
                        {/* Auth */}
                        <Route path="/auth/login" element={<LoginPage />} />
                        <Route path="/auth/signin" element={<LoginPage />} />
                        <Route path="/auth/signup" element={<SignupPage />} />
                        {/* Enroll */}
                        <Route path="/enroll/phoneform" element={<PhoneContactPage />} />
                        <Route path="/enroll/addressform" element={<PrimaryAddressPage />} />
                        <Route path="/enroll/personform" element={<PersonalDetailsPage />} />
                        <Route path="/enroll/decision" element={<EnrollDecisionPage />} />

                        {/* App */}
                        <Route path="/app/account" element={<Account />} />
                        <Route path="/app/dashboard" element={<Dashboard />} />
                        <Route path="/app/openaccount" element={<OpenAccountPage />} />
                        <Route path="/app/profile" element={<Profile />} />
                        <Route path="/app/scan" element={<Scan />} />
                        {/* App: Employee */}
                        <Route path="/app/sale" element={<Sale />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
