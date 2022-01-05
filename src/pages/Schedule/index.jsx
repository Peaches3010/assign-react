import React, { useContext } from "react";
import ScheduleItem from "../../components/Schedule/ScheduleItem";
import { Context } from "../../store/context/context";
import ScheduleList from "../../components/Schedule/ScheduleList";

const Schedule = () => {
  const { schedules } = useContext(Context);
  const showListSchedule = () => {
    let result = null;
    result = schedules.map((schedule) => {
      return <ScheduleItem key={schedule.id} schedule={schedule} />;
    });
    return result;
  };
  return (
    <div className="container">
      <button className="btn btn-primary">Add Schedule</button>
      <ScheduleList>{showListSchedule()}</ScheduleList>
    </div>
  );
};

export default Schedule;
