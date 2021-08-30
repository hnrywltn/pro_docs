const LOAD = 'project/';
const ADD = 'project/ADD';
const EDIT = 'project/edit/';
const DELETE = 'project/delete/';


const load = projects => ({
  type: LOAD,
  projects,
});

const add = project => ({
  type: ADD,
  project,
});

const edit = project => ({
  type: EDIT,
  project,
});

const deleteProject = project => ({
  type: DELETE,
  project,
});


export const getProjects = () => async (dispatch) => {
  const res = await fetch('/api/projects/');
  if(res.ok) {
    const projects = await res.json();
    dispatch(load(projects));
    return projects;
  }
};


export const addProject = (payload) => async (dispatch) => {
  const res = await fetch(`/api/projects/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (res.ok) {
    const project = res.json();
    dispatch(add(project))
    return project;
  }
}

export const editProject = (payload) => async (dispatch) => {
  const res = await fetch(`/api/projects/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (res.ok) {
    const project = res.json();
    dispatch(edit(project))
    return project;
  }
}

export const deleteProjectById = (projectId) => async (dispatch) => {
  const res = await fetch(`/api/projects/${projectId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) {
    const data = res.json();
    dispatch(deleteProject(projectId));
    return data.message;
  }
}







const initialState = {}
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newProjects = {};
      action.projects.projects.forEach(project => {
        newProjects[project.id] = project;
      });
      return newProjects;
    case ADD: {
      return {
        ...state,
        [action.project.id]: action.project
      }
    }
    case DELETE: {
      const newState = { ...state }
      delete newState[action.projectId]
      return newState
    }
    case EDIT: {
      return {
        ...state,
        [action.project.id]: action.project
      }
    }
    default:
      return state;
  }
};

export default projectReducer;
