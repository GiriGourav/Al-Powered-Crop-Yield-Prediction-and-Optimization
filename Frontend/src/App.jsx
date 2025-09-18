import { useState } from 'react'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Form from './pages/Form';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Suggestions from './pages/Suggestions';
import KnowlegdePage from './pages/KnowlegdePage';

function App() {
return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'/form'} element={<Form />} />
          <Route path={'/suggestions'} element={<Suggestions />} />
          <Route path={"/knowledge/:id"} element={<KnowledgePage />} />
          <Route path={'*'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
{/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}

export default App;
