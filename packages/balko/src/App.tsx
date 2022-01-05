import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Auth
import { LoginForm } from './routes/Auth/Login/LoginForm';
import { SignupForm } from './routes/Auth/Signup/Signup';
// Enroll
import { AddressForm } from './routes/Enroll/AddressForm';
import { PersonForm } from './routes/Enroll/PersonForm';
import { PhoneForm } from './routes/Enroll/PhoneForm';
// App
import Account from './routes/App/Account/Account';
import Dashboard from './routes/App/Dashboard/Dashboard';
import Profile from './routes/App/Profile/Profile';
import Scan from './routes/App/Scan/Scan';

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
                    <Route path="/auth/signup" element={<SignupForm />} />
                    {/* Enroll */}
                    <Route path="/enroll/phoneform" element={<PhoneForm />} />
                    <Route path="/enroll/addressform" element={<AddressForm />} />
                    <Route path="/enroll/personform" element={<PersonForm />} />
                    {/* App */}
                    <Route path="/app/account" element={<Account />} />
                    <Route path="/app/dashboard" element={<Dashboard />} />
                    <Route path="/app/profile" element={<Profile />} />
                    <Route path="/app/scan" element={<Scan />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
