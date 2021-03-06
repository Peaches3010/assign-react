import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../store/context/context";
import moment from "moment";
const ScheduleItem = (props) => {
  const { dispatchSchedules } = useContext(Context);
  const { schedule } = props;
  const handleRemove = () => {
    var message = window.confirm(
      `Are you sure to remove ${schedule.title} of ${schedule.creator} ?`
    );
    if (message) {
      dispatchSchedules({ type: "REMOVE_SCHEDULE", id: schedule.id });
    }
  };
  return (
    <tr>
      <th scope="row">{schedule.title}</th>
      <td>{schedule.creator}</td>
      <td>{schedule.description}</td>
      <td>{schedule.location}</td>
      <td>{moment(schedule.time_start).format("DD/MM/yyyy HH:mm:ss")}</td>
      <td>{moment(schedule.time_end).format("DD/MM/yyyy HH:mm:ss")}</td>
      <td>
        <Link
          to={`/schedule/edit/${schedule.id}`}
          className="btn btn-primary flex-center"
          type="submit"
        >
          <ion-icon name="information-circle-outline"></ion-icon>
          Detail
        </Link>
      </td>
      <td>
        <Link
          to={`/schedule/edit/${schedule.id}`}
          className="btn btn-primary flex-center"
          type="submit"
        >
          <ion-icon name="checkbox-outline"></ion-icon>
          Edit
        </Link>
      </td>
      <td>
        <button
          type="submit"
          className="btn btn-danger flex-center"
          onClick={() => handleRemove()}
        >
          <ion-icon name="trash-outline"></ion-icon> Delete
        </button>
      </td>
    </tr>
  );
};

export default ScheduleItem;
