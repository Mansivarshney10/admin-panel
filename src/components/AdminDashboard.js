import React from 'react';
import GoogleSignIn from './GoogleSignIn';
import UserManagement from './UserManagement';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <GoogleSignIn />
      <UserManagement />
      {/* Add bot settings form and functionality here */}
    </div>
  );
};

export default AdminDashboard;
