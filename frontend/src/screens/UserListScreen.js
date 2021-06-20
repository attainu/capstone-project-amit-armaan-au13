import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader";
import { listUser } from "../action/userListAction";
import { deleteUser } from "../action/userDeleteAction";



const UserListScreen = ({history}) => {

const dispatch = useDispatch();

const userList = useSelector((state) => state.userList);

const userLogin = useSelector((state)=>state.userLogin)
const {userInfo} = userLogin

const userDelete = useSelector((state) => state.userDelete);
const { success:successDelete } = userDelete;

const { loading, error, users } = userList;

const deleteHandler = (id) => {
  if(window.confirm("Are You sure???")){
      dispatch(deleteUser(id));    
  }
};

useEffect(() => {
  if(userInfo && userInfo.isAdmin){
    dispatch(listUser());
  }
  else{
    history.push('/login')
  }
  
}, [dispatch,history,successDelete,userInfo]);

  return (
    <>
      <h2>USERS</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1> {error}</h1>
      ) : (
        <Table striped border hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i
                      class="fas fa-check-square"
                      style={{ color: "green" }}
                    ></i>
                  ) : (
                    <i class="fas fa-times" style={{color:"red"}}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/users/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i class="fas fa-user-edit" style={{ color: "blue" }}></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    className="btn-sm"
                    variant="danger"
                    onClick={() => {
                      deleteHandler(user._id);
                    }}
                  >
                    <i class="far fa-trash-alt"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
