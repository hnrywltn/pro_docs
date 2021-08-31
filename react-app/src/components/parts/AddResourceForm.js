import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getResources, addResource } from '../../store/resource.js';

function AddResourceForm({categories}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  let user = session.user;

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [user_id, setUserId] = useState(user.id);
  const [description, setDescription] = useState('');
  const [ref_link, setRef_Link] = useState('');
  const [cat_id, setCatId] = useState(1);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const resource = {
      name,
      user_id,
      description,
      ref_link,
      cat_id
    };
    await dispatch(addResource(resource));
    // if (response.ok) {
      // history.push('/');
      await dispatch(getResources());
    // } else {
      // setErrors(response.errors);
    // }
  };


const updateName = (e) => {
    setName(e.target.value);
};

const updateDescription = (e) => {
    setDescription(e.target.value);
};



const updateRef_link = (e) => {
    setRef_Link(e.target.value);
};


  let resourceForm = (
    <form
      className='form formstyle'
      onSubmit={handleSubmit}
    >
      <div className="errors">
          {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
          ))}
      </div>
      <div>
        <label>Name</label>
        <input
            type='text'
            value={name}
            onChange={updateName} />
      </div>
      <div>
        <label>Category</label>
        <select
            value={cat_id}
            onChange={(e) => setCatId(e.target.value)}
        >
          {Object.values(categories).map((category, i) => (
              <option key={i} value={category.id}>{category.cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Description</label>
        <input
            type='text'
            value={description}
            onChange={updateDescription} />
      </div>
      <div>
        <label>Reference Link</label>
        <input
            type='text'
            value={ref_link}
            onChange={updateRef_link} />
      </div>

    <button type='submit'>Add</button>
    </form>
  )





  return resourceForm



}







export default AddResourceForm;
