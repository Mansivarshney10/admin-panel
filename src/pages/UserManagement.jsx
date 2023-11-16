import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', username: '', email: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting new user:', newUser);

  };

  const blockUser = (userId) => {
    console.log(`Block user with ID: ${userId}`);

  };

  const deleteUser = (userId) => {
    console.log(`Delete user with ID: ${userId}`);

  };

  return (
    <div className="container mt-5">
      <h1>User Management</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input type="text" className="form-control" id="userId" name="id" value={newUser.id} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" name="username" value={newUser.username} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={newUser.email} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit New User</button>
      </form>

      
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-secondary btn-sm mr-2" onClick={() => blockUser(user.id)}>Block</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
