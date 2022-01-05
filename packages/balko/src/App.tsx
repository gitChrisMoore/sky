import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './routes/app/dashbaord/Dashboard';
import Page1 from './routes/Cultivate/Page1';
import { AddressForm } from './routes/Enroll/AddressForm';
import { PersonForm } from './routes/Enroll/PersonForm';
import { PhoneForm } from './routes/Enroll/PhoneForm';
import Home from './routes/Home';
import { LoginForm } from './routes/Login/LoginForm';
import { SignupForm } from './routes/Signup/Signup';

function App() {
    return (
        //
        <div>
            {' '}
            <Router>
                <Routes>
                    {/* Default Route */}
                    <Route path="*" element={<Home />} />
                    <Route path="/page1" element={<Page1 />} />
                    {/* Auth */}
                    <Route path="/auth/login" element={<LoginForm />} />
                    <Route path="/auth/signin" element={<LoginForm />} />
                    <Route path="/auth/signup" element={<SignupForm />} />
                    {/* Enroll */}
                    <Route path="/enroll/phoneform" element={<PhoneForm />} />
                    <Route path="/enroll/addressform" element={<AddressForm />} />
                    <Route path="/enroll/personform" element={<PersonForm />} />
                    {/* App */}
                    <Route path="/app/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
