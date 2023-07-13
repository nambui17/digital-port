import { Routes, Route, useLocation } from "react-router-dom";

import { Contact, MainPage, Projects, About } from './pages';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
        <Routes key={location.pathname} location={location}>
          <Route path='/'>
            <Route index={true} element={<MainPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
