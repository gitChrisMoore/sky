import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddressForm } from './routes/Enroll/AddressForm';
import { PersonForm } from './routes/Enroll/PersonForm';
import { PhoneForm } from './routes/Enroll/PhoneForm';
import Home from './routes/Home';

function App() {
    return (
        //
        <div>
            {' '}
            <Router>
                <Routes>
                    {/* Default Route */}
                    <Route path="*" element={<Home />} />

                    <Route path="/enroll/phoneform" element={<PhoneForm />} />
                    <Route path="/enroll/addressform" element={<AddressForm />} />

                    <Route path="/enroll/personform" element={<PersonForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
