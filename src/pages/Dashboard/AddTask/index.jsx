import React from "react";

const AddTask = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger flex-center"
        onClick={"null"}
      >
        <ion-icon
          style={{ marginRight: "0.5rem" }}
          className="btn-icon"
          name="arrow-back-circle"
        />
        Back
      </button>
      <ul
        className="nav nav-tabs justify-content-end"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="add-tab"
            data-bs-toggle="tab"
            data-bs-target="#add"
            type="button"
            role="tab"
            aria-controls="add"
            aria-selected="true"
          >
            Add
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="add"
          role="tabpanel"
          aria-labelledby="add-tab"
        >
          <form>
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
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Insert a suitable description"
                rows={3}
              ></textarea>
            </div>
            <div className="p-3 mb-2 bg-light text-dark"> Status </div>
            <div className="flex-start">
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  className="form-check-input"
                  id="0"
                />
                <label htmlFor="0" className="form-check-label">
                  New
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  className="form-check-input"
                  id="1"
                />
                <label htmlFor="0" className="form-check-label">
                  in Progress
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  className="form-check-input"
                  id="3"
                />
                <label htmlFor="0" className="form-check-label">
                  Done
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
