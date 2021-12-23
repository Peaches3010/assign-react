import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

const Task = (props) => {
  const { title, icon, color, tasks } = props;
  return (
    <div className="card">
      <div
        className={`card-header d-flex align-items-center justify-content-between ${color} text-white`}
      >
        <h3>{title}</h3>
        <ion-icon name={icon}></ion-icon>
      </div>
      {title === "Tasks got done" ? (
        <div className="accordion" id="accordionFlushExample">
          {tasks.map((task, index) => {
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {task.title}
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="card text-dark -light mb-3">
                      <div className="card-header">
                        <Link to={`dashboard/edit/${task.id}`}>
                          {task.title} detail view{" "}
                        </Link>
                      </div>
                      <div className="card-body">
                        <p className="card-text d-flex align-items-center justifly-content-between">
                          <strong className="card-title">Title:</strong>
                          <Input disabled value={task.title} />
                        </p>
                        <p className="card-text d-flex align-items-center justifly-content-between">
                          <strong className="card-title">Title:</strong>
                          <textarea
                            className="form-control"
                            placeholder="leave comment here"
                            id="floatingTextarea2"
                            value={task.desrciption}
                            disabled
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <ul className="list-group" style={{ margin: "1rem" }}>
          {tasks.map((task, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link
                  className="text-decoration-none text-black"
                  to={`/dashboard/edit/${task.id}`}
                >
                  {task.title}
                </Link>
              </li>
            );
          })}
          {title === "New Tasks" ? (
            <Link
              to="/dashboard/add"
              className="btn btn-primary d-flex align-items-center"
              style={{ width: "100px", marginTop: "1rem" }}
            >
              <ion-icon name="list" /> Add
            </Link>
          ) : null}
        </ul>
      )}
    </div>
  );
};
Task.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  tasks: PropTypes.array,
};

export default Task;
