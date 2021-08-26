const LOAD = 'category/';

const load = categories => ({
  type: LOAD,
  categories,
});





export const getCategories = () => async (dispatch) => {
  const res = await fetch('/api/categories/');
  if(res.ok) {
    const categories = await res.json();
    dispatch(load(categories));
    return categories;
  }
};





const initialState = {}
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newCategories = {};
      action.categories.categories.forEach(category => {
        newCategories[category.id] = category;
      });
      return newCategories;
    default:
      return state;
  }
};

export default categoriesReducer;
