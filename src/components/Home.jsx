import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import PostUserData from "./PostUserData";
import EditUserData from "./EditUserData";
import { GetApiAction, DeleteApiAction } from "../redux/action/action";
// --------------------------------------------------------------------------------------
const Home = () => {
  const responseList = useSelector((state) => state.details);
  console.log(responseList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  const returnedList = responseList.map((user, index) => {
    return (
      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <EditUserData data={user} />
          {/* <Button variant="primary" onClick={() => editUser(user)}>
            <FontAwesomeIcon icon={faEdit} />
          </Button> */}
        </td>

        <td>
          <Button
            variant="secondary"
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </td>
      </tr>
    );
  });

  const editUser = (user) => {
    console.log(user);
    <EditUserData data={user} />;
  };

  const deleteUser = (id) => {
    console.log(id);
    dispatch(DeleteApiAction(id));
    dispatch(GetApiAction());
  };

  return (
    <>
      <div className="container">
        <h2>Student Information</h2>
        {<PostUserData />}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>{returnedList}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
