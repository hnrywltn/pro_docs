const LOAD = 'technology/';

const load = technologies => ({
  type: LOAD,
  technologies,
});





export const getTechnologies = () => async (dispatch) => {
  console.log('getTechnologies!!!!!!!!!!!!');
  const res = await fetch('/api/technologies/');
  if(res.ok) {
    const technologies = await res.json();
    dispatch(load(technologies));
    return technologies;
  }
};





const initialState = {}
const technologiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newTechnologies = {};
      action.technologies.technologies.forEach(technology => {
        newTechnologies[technology.id] = technology;
      });
      return newTechnologies;
    default:
      return state;
  }
};

export default technologiesReducer;
