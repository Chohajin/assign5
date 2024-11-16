import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

const ShowUser = () => {
  const showUserApi = "https://67281923270bd0b9755456e8.mockapi.io/api/v1/users";

  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`${showUserApi}/${id}`);
      setUser(user.filter((item) => item.id !== id));
    } catch (error) {
      setError("Failed to delete user");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(showUserApi);
      setUser(response.data);
    } catch (error) {
      setError("Failed to fetch users");
    }
  };

  return (
    <div className="container mt-5">
      {isLoading && <Loader />}
      {error && <p className="text-danger">{error}</p>}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>User Management</h2>
        <Link to="/add-user" className="btn btn-primary">
          <i className="fa fa-plus"></i> Add User
        </Link>
      </div>

      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <div className="btn-group">
                    <Link
                      to={`/edit-user/${item.id}`}
                      className="btn btn-warning btn-sm"
                      title="Edit"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <Link
                      to={`/user/${item.id}`}
                      className="btn btn-info btn-sm mx-2"
                      title="View"
                    >
                      <i className="fa fa-eye"></i>
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      title="Delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa fa-trash"></i>
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
  );
};

export default ShowUser;
