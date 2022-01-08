import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Auth
import { LoginForm } from './routes/Auth/Login/LoginForm';
import SignupPage from './routes/Auth/Signup/SignupPage';

// Enroll
import PrimaryAddressPage from './routes/Enroll/PrimaryAddress/PrimaryAddressPage';
import PersonalDetailsPage from './routes/Enroll/PersonalDetails/PersonalDetailsPage';
import PhoneContactPage from './routes/Enroll/PhoneContact/PhoneContactPage';

// App
import Account from './routes/App/Account/Account';
import Dashboard from './routes/App/Dashboard/Dashboard';
import Profile from './routes/App/Profile/Profile';
import Scan from './routes/App/Scan/Scan';
import OpenAccount from './routes/App/OpenAccount/OpenAccount';

function App() {
    return (
        //
        <div>
            {' '}
            <Router>
                <Routes>
                    {/* Default Route */}
                    <Route path="*" element={<LoginForm />} />
                    {/* Auth */}
                    <Route path="/auth/login" element={<LoginForm />} />
                    <Route path="/auth/signin" element={<LoginForm />} />
                    <Route path="/auth/signup" element={<SignupPage />} />
                    {/* Enroll */}
                    <Route path="/enroll/phoneform" element={<PhoneContactPage />} />
                    <Route path="/enroll/addressform" element={<PrimaryAddressPage />} />
                    <Route path="/enroll/personform" element={<PersonalDetailsPage />} />
                    {/* App */}
                    <Route path="/app/account" element={<Account />} />
                    <Route path="/app/dashboard" element={<Dashboard />} />
                    <Route path="/app/openaccount" element={<OpenAccount />} />
                    <Route path="/app/profile" element={<Profile />} />
                    <Route path="/app/scan" element={<Scan />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
