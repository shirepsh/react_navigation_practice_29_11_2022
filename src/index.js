import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="/Test1" element={<Test1 />} />
                    <Route path="/Test2" element={<Test2 />} />
                    <Route path="/Test3" element={<Test3/>} />
                    <Route path="/Test4" element={<Test4/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

