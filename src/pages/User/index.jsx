import React, { useContext, useState } from "react";
import UserItem from "../../components/User/UserItem";
import UserList from "../../components/User/UserList";
import { Context } from "../../store/context/context";
const User = (props) => {
  const [isAdd, setIsAdd] = useState(false);
  const { users } = useContext(Context);
  const handleCancel = () => {
    var confirm = window.confirm(`Are you want to cancel user`);
    if (confirm) setIsAdd(false);
  };

  return (
    <div className="container">
      {isAdd ? (
        <button
          type="submit"
          className="btn btn-danger flex-center mb-2"
          onClick={handleCancel}
        >
          <ion-icon name="ban"></ion-icon>Cancel
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-primary flex-center mb-2"
          onClick={() => setIsAdd(true)}
        >
          <ion-icon name="person-add"></ion-icon>Add
        </button>
      )}
      <div className="row">
        {isAdd ? <UserItem user={null} setIsAdd={setIsAdd} /> : null}
        <UserList users={users} />
      </div>
    </div>
  );
};

export default User;
