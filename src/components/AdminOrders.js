import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        console.log(response.data); // Log to check the format
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders: ", error);
        setError("Failed to fetch orders. Please try again later.");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="admin-orders-page">
      <h2>All Orders</h2>
      <div className="orders-container">
        {error && <p className="error-message">{error}</p>}
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Book Title</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{`${order.firstName} ${order.lastName}`}</td>
                  <td>{order.book.title}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{`${order.address}, ${order.addressArea}, ${order.state}, ${order.country} - ${order.pincode}`}</td>
                  <td>{new Date(order.orderDate).toString() !== "Invalid Date" ? new Date(order.orderDate).toLocaleString() : "Date not available"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
