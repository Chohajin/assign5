import React, { useEffect, useState } from "react";

const ShowUser = () => {
  const apiUrl = "https://67281923270bd0b9755456e8.mockapi.io/api/v1/users";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete user");
      // 삭제 후 사용자 목록 갱신
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Error deleting user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <div className="d-flex flex-column align-items-center mb-4">
          <h2>👥 User Management</h2>
          <a href="/add-user" className="btn btn-primary mb-2">
            ➕ Add User
          </a>
          <h5 className="text-muted">Manage all users below</h5>
        </div>

        {isLoading && <div className="spinner-border text-primary" role="status"></div>}
        {error && <p className="text-danger">{error}</p>}

        <table className="table table-striped table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-warning btn-sm"
                        title="Edit"
                        onClick={() => (window.location.href = `/edit-user/${user.id}`)}
                      >
                        ✏️
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        title="Delete"
                        onClick={() => handleDelete(user.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUser;
