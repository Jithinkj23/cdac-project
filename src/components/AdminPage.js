
import React, { useState } from 'react';
import '../css/AdminPage.css';
import AddBookForm from './AddBookForm';
import ShowBooks from './ShowBooks';  // Import the ShowBooks component
import AdminOrders from './AdminOrders';

const AdminPage = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  const renderContent = () => {
    switch (selectedOption) {
      case 'manageBooks':
        return <AddBookForm />;  // Render the AddBookForm component
      case 'showBooks':
        return <ShowBooks />;  // Render the ShowBooks component
      case 'manageUsers':
        return <div>Manage Users Section</div>;
      case 'adminorders':
        return <AdminOrders />; 
      default:
        return <div>Welcome to the Admin Dashboard</div>;
    }
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
        </div>
      </header>

      <div className="admin-container">
        <div className="admin-sidebar">
          <ul>
            <li onClick={() => setSelectedOption('dashboard')}>Dashboard</li>
            <li onClick={() => setSelectedOption('manageBooks')}>Manage Books</li>
            <li onClick={() => setSelectedOption('showBooks')}>Show Added Books</li> {/* Link to ShowBooks */}
            <li onClick={() => setSelectedOption('manageUsers')}>Manage Users</li>
            <li onClick={() => setSelectedOption('adminorders')}>View Orders</li>
          </ul>
        </div>

        <div className="admin-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;


