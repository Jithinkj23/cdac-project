import React, { useState } from 'react';
import '../css/AdminPage.css';

const AdminPage = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const renderContent = () => {
    switch (selectedOption) {
      case 'manageBooks':
        return <div>Manage Books Section</div>;
      case 'manageUsers':
        return <div>Manage Users Section</div>;
      case 'viewOrders':
        return <div>View Orders Section</div>;
      default:
        return <div>Welcome to the Admin Dashboard</div>;
    }
  };

  return (
    <div className="admin-page">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <button className="logout-button">Admin Logged In</button> {/* Admin button */}
        </div>
      </header>

      {/* Main Layout */}
      <div className="admin-container">
        {/* Sidebar */}
        <div className="admin-sidebar">
          <ul>
            <li onClick={() => setSelectedOption('dashboard')}>Dashboard</li>
            <li onClick={() => setSelectedOption('manageBooks')}>Manage Books</li>
            <li onClick={() => setSelectedOption('manageUsers')}>Manage Users</li>
            <li onClick={() => setSelectedOption('viewOrders')}>View Orders</li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="admin-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
