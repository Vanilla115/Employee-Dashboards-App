import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/main';
import EmployeesApp from './components/app/app'; // путь к твоему старому компоненту

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<EmployeesApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;