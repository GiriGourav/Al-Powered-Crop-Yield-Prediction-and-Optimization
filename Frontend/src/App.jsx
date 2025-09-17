import { useState } from 'react'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />

         
          <Route path={'*'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
{/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}

export default App;
