import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

export default function UserList() {
  const { user, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  const fetchUsers = async (page = 1) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      setUsers(res.data.users);
      setTotalPages(res.data.totalPages);
      setCurrentPage(res.data.currentPage);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert('Session expired. Please log in again.');
        logout();
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
    fetchUsers(currentPage);
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user._id}>
          {user.name} - {user.email}
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
      
      {/* Pagination Controls */}
      <div>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}