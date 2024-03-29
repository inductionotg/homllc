
import './App.css'
import MobileLayout from './components/MobileLayout'
import Container from './components/MobileLayout'
import WeatherForecast from './components/WeatherForecast'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import HomePage from './components/HomePage'
import DesktopModeMessage from './components/DesktopModeMessage';


function App() {
  
    return (
      <Router>
      <div className='main-element'>
        <DesktopModeMessage/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobilelayout" element={<MobileLayout />} />
        </Routes>
      </div>
    </Router>
    )
    
    
  
}

export default App
