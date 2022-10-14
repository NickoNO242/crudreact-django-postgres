import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CompanyList from './components/Company/CompanyList';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar';
import CompanyForm from './components/Company/CompanyForm';
import {Routes, Route,BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='container my-4'>
        <Routes>
          <Route exact path='/' element={<CompanyList />} />
          <Route path='/companyForm' element={<CompanyForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
