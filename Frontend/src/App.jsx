import { useState } from 'react'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Form from './pages/Form';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Suggestions from './pages/Suggestions';
import KnowlegdePage from './pages/KnowlegdePage';
import Selection from './pages/Selection';
import ProtectedRoutes from './components/ProtectedRoutes';
import GovSchems from './pages/GovSchems';
function App() {
return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'/form'} element={
            //  <ProtectedRoutes>
               <Form />
            //  </ProtectedRoutes>
            } />
          <Route path={'/selection'} element={
            //  <ProtectedRoutes>

               <Selection />
            //  </ProtectedRoutes>
            } />
          <Route path={'/suggestions'} element={
            // <ProtectedRoutes>
              <Suggestions />
            // </ProtectedRoutes>
            } />
          <Route path={"/knowledge/:id"} element={
            // <ProtectedRoutes>

              <KnowlegdePage />
            // </ProtectedRoutes>
            } />
             <Route path={"/gov-schemes"} element={
            // <ProtectedRoutes>

              <GovSchems />
            // </ProtectedRoutes>
            } />
             

          <Route path={'*'} element={
            // <ProtectedRoutes>

              <Home />
            // </ProtectedRoutes>
            } />
        </Routes>
      </BrowserRouter>
    </>
  )
}
{/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}

export default App;
