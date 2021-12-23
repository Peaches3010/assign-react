import React, { createContext, useReducer } from "react";
const Context = createContext(null);

const initialTask = [
  {
    id: "0ac07e96-46cd-11ec-81d3-0242ac130003",
    title: "Do homework",
    description: "Do React JS and ASP.NET create web application",
    status: 1,
  },
  {
    id: "0fc5b988-46cd-11ec-81d3-0242ac130003",
    title: "Play Football",
    description: "At 6.PM play football with my friend",
    status: 0,
  },
  {
    id: "15185b0c-46cd-11ec-81d3-0242ac130003",
    title: "Learn Angular",
    description: "Learn Angular training",
    status: 0,
  },
  {
    id: "19402ab6-46cd-11ec-81d3-0242ac130003",
    title: "Learn React JS",
    description:
      "Can apply the knowledge for building a web application using ReactJS",
    status: 2,
  },
  {
    id: "1fd4495c-46cd-11ec-81d3-0242ac130003",
    title: "Learn Blazor",
    description:
      "Can apply the knowledge for building a web application using Blazor",
    status: 0,
  },
  {
    id: "2748260e-46cd-11ec-81d3-0242ac130003",
    title: "Learn VueJs",
    description:
      "Can apply the knowledge in building a web application using VueJs",
    status: 0,
  },
  {
    id: "2d5bced8-46cd-11ec-81d3-0242ac130003",
    title: "Learn Azure",
    description: "Can apply the knowledge in deploy a web application to Azure",
    status: 2,
  },
];

const TaskReducer = (state, action) => {
  let index, task;
  switch (action) {
    case "GET_TASKS":
      return state;
    case "UPDATE_TASK":
      task = action.task;
      index = findById(state, task.id);
      state[index] = {
        ...state[index],
        status: task.status,
        title: task.title,
        description: task.description,
      };
      return [...state];
    case "DELETE_TASK":
      index = findById(state, task.id);
      state.splice(index, 1);
      return [...state];
    case "ADD_TASK":
      task = action.task;
      const newTask = {
        id: create_UUID(),
        title: task.title,
        description: task.description,
        status: task.status,
      };
      return [...state, newTask];
    default:
      throw new Error();
  }
};
function create_UUID() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}
const findById = (state, id) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].id === id) return i;
  }
  return -1;
};

const ContextProvider = (props) => {
  const [tasks, dispatchTasks] = useReducer(TaskReducer, initialTask);
  let value = { tasks, dispatchTasks };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export { ContextProvider, Context };
