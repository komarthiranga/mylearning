import { AppShellWrapper } from './Components/AppShell';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const DashboardPage = React.lazy(() => import('./pages/dashboard'));
const TechnologyPage = React.lazy(() => import('./pages/technology'));
const NewTopic = React.lazy( () => import('./pages/new-topic'));

function App() {

  return (
    <AppShellWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
           <Route path='/dashboard' element={<DashboardPage />} />
           <Route path="/technology/:technologyId" element={<TechnologyPage />} />
           <Route path="/new-topic" element={<NewTopic />} />
        </Routes>
      </Suspense>  
    </AppShellWrapper>
  );
}

export default App;
