// src/components/admin/AdminDashboard.jsx
import { useState } from 'react';
import AdminMessages from './AdminMessages';
// import AdminJobs from './AdminJobs';
// import AdminApplications from './AdminApplications';
import '../../styles/admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');

  return (
<div className="min-h-screen bg-gray-100 flex justify-center">
  <div className="w-full max-w-5xl px-4 flex flex-col items-center">
    {/* Header */}
    <div className="bg-primary-700 text-white w-full">
      <div className="container mx-auto">
        <h1 className="text-primary-600 text-xl font-bold text-center">Admin Dashboard</h1>
      </div>
    </div>
      
      <div className="container mx-auto p-4">
        {/* Tab navigation */}
        <div className="flex border-b mb-4 admin-tabs">
          <button
            className={`px-4 py-2 ${
              activeTab === 'messages' 
                ? 'border-b-2 border-primary-600 text-primary-600' 
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'jobs' 
                ? 'border-b-2 border-primary-600 text-primary-600' 
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('jobs')}
          >
            Job Positions
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'applications' 
                ? 'border-b-2 border-primary-600 text-primary-600' 
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
        </div>
        
        {/* Tab content */}
        {activeTab === 'messages' && <AdminMessages />}
        {/* {activeTab === 'jobs' && <AdminJobs />}
        {activeTab === 'applications' && <AdminApplications />} */}
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;