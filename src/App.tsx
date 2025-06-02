import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/DashboardPage';
import Signin from './pages/Signin';

import InfoManagementPage from './pages/InfoManagement';
import InquiriesManagementPage from './pages/InquiriesManagementPage';
import CreateJobPostingPage from './pages/JobPostingCreatePage';
import JobPostingManagementPage from './pages/JobPostingManagementPage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/info-management' element={<InfoManagementPage />} />
        <Route
          path='/inquiries-management'
          element={<InquiriesManagementPage />}
        />
        <Route path='/create-job-posting' element={<CreateJobPostingPage />} />
        <Route
          path='/job-posting-management'
          element={<JobPostingManagementPage />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
