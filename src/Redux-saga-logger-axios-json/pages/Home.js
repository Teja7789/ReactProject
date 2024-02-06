import React, { useEffect } from "react";
import { fetchUsersRequest } from "../reduxSaga/action";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { usersGetAll } = useSelector((state) => state.data);
  console.log(usersGetAll, "usersData");
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const renderUsers = usersGetAll.map((user) => (
    <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>DelIcon</td>
      </tr>
    </tbody>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Del</td>
          </tr>
        </thead>
        {renderUsers}
      </table>
    </div>
  );
}

export default Home;
