// src/components/admin/AdminMessages.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import '../../styles/admin.css';

const BASE_URL = 'http://192.168.2.11:8080';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  console.log('Fetched messages to be below');
  // Fetch messages from public API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/public/message`);
        // Ensure we always set an array, even if response.data is null/undefined
        console.log('Fetched messages:', response.data);
        setMessages(Array.isArray(response.data.content) ? response.data.content : []);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch messages');
        setLoading(false);
        console.error('Error fetching messages:', err);
        // Set empty array on error too
        setMessages([]);
      }
    };

    fetchMessages();
  }, [BASE_URL]);

  // Delete a message via public API
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`${BASE_URL}/api/public/message/${id}`);
        setMessages(prevMessages => 
          Array.isArray(prevMessages) 
            ? prevMessages.filter(message => message.id !== id) 
            : []
        );
        if (selectedMessage?.id === id) {
          setSelectedMessage(null);
        }
      } catch (err) {
        console.error('Error deleting message:', err);
        alert('Failed to delete message');
      }
    }
  };

  // Filter messages based on search term
  const filteredMessages = Array.isArray(messages) 
    ? messages.filter(message =>
        message.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) return <div className="text-center py-8">Loading messages...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-primary-800">Contact Messages</h2>
        <div className="relative w-full md:w-64 relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Tabular format */}
      <div className="overflow-x-auto">
        <table className="admin-messages-table min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Id</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Received At</th>
              <th className="px-4 py-2 border-b">Message</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  No messages found
                </td>
              </tr>
            ) : (
              filteredMessages.map((message, idx) => (
                <tr key={message.id} className="hover:bg-gray-50">
                  {/* <td className="px-4 py-2 border-b">{message.id}</td> */}
                  <td className="px-4 py-2 border-b">{idx + 1}</td>
                  <td className="px-4 py-2 border-b">{message.name}</td>
                  <td className="px-4 py-2 border-b">{message.email}</td>
                  <td className="px-4 py-2 border-b">{message.phone}</td>
                  <td className="px-4 py-2 border-b">
                    {message.receivedAt
                      ? format(new Date(message.receivedAt), 'yyyy-MM-dd HH:mm')
                      : ''}
                  </td>
                  <td className="px-4 py-2 border-b whitespace-pre-line">{message.message}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="admin-delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMessages;