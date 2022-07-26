import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "../api";

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState(null);
  const [movies, setUsers] = useState([]);

  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = () => {
    API.get("users/")
      .then((res) => {
        setUsers(res.data);
        // setName(res[0].name)
        // setGenre(res[0].genre)
        // setStarring(res[0].starring)
        // setMovieId(res[0].id)
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, email, address };
    API.post("users/", item).then(() => refreshUsers());
  };

  const onUpdate = (id) => {
    let item = { name, email, address };
    API.patch(`users/${id}/`, item).then((res) => refreshUsers());
  };

  const onDelete = (id) => {
    API.delete(`users/${id}/`).then((res) => refreshUsers());
  };

  function selectMovie(id) {
    let item = movies.filter((user) => user.id === id)[0];
    setName(item.name);
    setEmail(item.email);
    setAddress(item.address);
    setUserId(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new User</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{userId}Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Starring"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(userId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td> {user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => selectMovie(user.id)}>Update</button>
                        <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddUser;