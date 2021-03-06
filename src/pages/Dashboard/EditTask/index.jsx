import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../../store/context/context";

const EditTask = (props) => {
  const { tasks, dispatchTasks } = useContext(Context);
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    status: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "UPDATE_TASK", task });
    toast.success("Edit task successful");
    history.push("/");
  };
  const handleRemove = (task) => {
    var confirm = window.confirm(`Are you want to remove ${task.title}`);
    if (confirm) {
      dispatchTasks({ type: "REMOVE_TASK", id: task.id });
      toast.success("Delete Task Successful !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/");
    }
  };

  useEffect(() => {
    let taskView = tasks.filter((item) => item.id === id);
    setTask({
      id: taskView[0].id,
      title: taskView[0].title,
      description: taskView[0].description,
      status: taskView[0].status,
    });
  }, [id, tasks]);
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger flex-center"
        onClick={() => {
          history.goBack();
        }}
      >
        <ion-icon class="btn-icon" name="arrow-back-circle"></ion-icon> Back
      </button>
      <div>
        <nav>
          <div
            className="nav nav-tabs justify-content-end"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-view-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-view"
              type="button"
              role="tab"
              aria-controls="nav-view"
              aria-selected="true"
            >
              View
            </button>
            <button
              className="nav-link"
              id="nav-edit-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-edit"
              type="button"
              role="tab"
              aria-controls="nav-edit"
              aria-selected="true"
            >
              Edit
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-view"
            role="tabpanel"
            aria-labelledby="nav-view-tab"
          >
            <h5>{task.title}</h5>
            <p>{task.description}</p>
          </div>
          <div
            className="tab-pane fade"
            id="nav-edit"
            role="tabpanel"
            aria-labelledby="nav-edit-tab"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Insert the title"
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={task.description}
                  rows={3}
                  placeholder="Insert a suitable description"
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                  required
                />
              </div>
              <div className="p-3 mb-2 bg-light text-dark">Status</div>
              <div className="flex-start">
                <div className="form-check" style={{ marginRight: "1rem" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value={0}
                    id="0"
                    checked={task.status === 0}
                    onChange={(e) =>
                      setTask({ ...task, status: parseInt(e.target.value) })
                    }
                  />
                  <label className="form-check-label" htmlFor="0">
                    Now
                  </label>
                </div>
                <div className="form-check" style={{ marginRight: "1rem" }}>
                  <input
                    className="form-check-input"
                    value={1}
                    type="radio"
                    name="status"
                    id="1"
                    onChange={(e) =>
                      setTask({ ...task, status: parseInt(e.target.value) })
                    }
                    checked={task.status === 1}
                  />
                  <label className="form-check-label" htmlFor="1">
                    In process
                  </label>
                </div>
                <div className="form-check" style={{ marginRight: "1rem" }}>
                  <input
                    className="form-check-input"
                    value={2}
                    type="radio"
                    name="status"
                    id="2"
                    onChange={(e) =>
                      setTask({ ...task, status: parseInt(e.target.value) })
                    }
                    checked={task.status === 2}
                  />
                  <label className="form-check-label" htmlFor="2">
                    Done
                  </label>
                </div>
              </div>
              <div className="flex-end">
                <button
                  type="submit"
                  className="btn btn-primary flex-center mr-1"
                >
                  <ion-icon
                    class="btn-icon"
                    name="checkmark-done-circle-outline"
                  ></ion-icon>
                  Update
                </button>
                <button
                  type="submit"
                  className="btn btn-danger flex-center mr-1"
                  onClick={() => handleRemove(task)}
                >
                  <ion-icon class="btn-icon" name="trash-outline"></ion-icon>
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-light flex-center"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <ion-icon
                    class="btn-icon"
                    name="close-circle-outline"
                  ></ion-icon>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTask;
