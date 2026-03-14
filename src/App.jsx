
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Hospitals from './Pages/DetailsPage';
import Bookings from './Pages/BookingsPg';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hospitals' element={<Hospitals/>} />
        <Route path='/bookings' element={<Bookings/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
