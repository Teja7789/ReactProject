import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  fetchUsersError,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux/Main/index";

function Users(props) {
  const { loading, users, error, fetchUsers } = props;

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "98vh",
        width: "100%",
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error getting users</div>
      ) : (
        <div>
          {users.map((user, index) => (
            <p key={index}>{user}</p>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.data,"rootReducer");
  return state.data;
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:3006/users")
      .then((response) => {
        console.log(response,"res")
        const users = response.data.map((user) => user.email);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        console.log(error,"err");
        dispatch(fetchUsersError(error.message));
      });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);