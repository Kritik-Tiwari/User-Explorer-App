import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);           // store fetched users
  const [loading, setLoading] = useState(true);     // loading state
  const [error, setError] = useState(null);         // error state
  const [searchQuery, setSearchQuery] = useState(""); // search input

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to load users. Try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">👥 User Explorer</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading ? (
        <p className="text-gray-500 text-lg">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-gray-600 text-lg">No users match your search.</p>
      ) : (
        <UserList users={filteredUsers} />
      )}
    </div>
  );
};

export default App;
