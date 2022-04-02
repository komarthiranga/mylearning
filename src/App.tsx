import { AppShellWrapper } from './Components/AppShell';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard';

function App() {

  return (
    <AppShellWrapper>
        <Routes>
           <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
    </AppShellWrapper>
  );
}

export default App;
