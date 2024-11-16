import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = `https://67281923270bd0b9755456e8.mockapi.io/api/v1/users/${id}`;
  const [user, setUser] = useState({ name: "", age: "", city: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError("Failed to fetch user data.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(apiUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      navigate("/show-user");
    } catch (err) {
      setError("Failed to update user data.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>✏️ Edit User</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={user.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={user.city}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUser;
