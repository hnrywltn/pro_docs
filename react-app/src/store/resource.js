const LOAD = 'resource/';
const ADD = 'resource/ADD';
const EDIT = 'resource/edit/';
const DELETE = 'resource/delete/';

const load = resources => ({
  type: LOAD,
  resources,
});

const add = resource => ({
  type: ADD,
  resource,
});

const edit = resource => ({
  type: EDIT,
  resource,
});

const deleteResource = resource => ({
  type: DELETE,
  resource,
});




export const getResources = () => async (dispatch) => {
  const res = await fetch('/api/resources/');
  if(res.ok) {
    const resources = await res.json();
    dispatch(load(resources));
    return resources;
  }
};


export const addResource = (payload) => async (dispatch) => {
  const res = await fetch(`/api/resources/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (res.ok) {
    const resource = res.json();
    dispatch(add(resource))
    return resource;
  }
}

export const editResource = (payload) => async (dispatch) => {
  console.log(payload)
  const res = await fetch(`/api/resources/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (res.ok) {
    const resource = res.json();
    dispatch(edit(resource))
    return resource;
  }
}

export const deleteResourceById = (resourceId) => async (dispatch) => {
  console.log(resourceId, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!THUNK reached')
  const res = await fetch(`/api/resources/${resourceId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) {
    const data = res.json();
    dispatch(deleteResource(resourceId));
    return data.message;
  }
}













const initialState = {}
const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newResources = {};
      action.resources.resources.forEach(resource => {
        newResources[resource.id] = resource;
      });
      return newResources;
    case ADD: {
      return {
        ...state,
        [action.resource.id]: action.resource
      }
    }
    case DELETE: {
      const newState = { ...state }
      delete newState[action.resourceId]
      return newState
    }
    case EDIT: {
      return {
        ...state,
        [action.resource.id]: action.resource
      }
    }
    default:
      return state;
  }
};

export default resourceReducer;
