import React from "react";

const ScheduleList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Creator</th>
          <th>Description</th>
          <th>Location</th>
          <th>Time Start</th>
          <th>Time End</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default ScheduleList;
