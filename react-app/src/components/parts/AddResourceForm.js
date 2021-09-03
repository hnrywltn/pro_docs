import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const [resourceAdded, setResourceAdded] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.split('').filter(letter => letter !== ' ').length || !description.split('').filter(letter => letter !== ' ').length) {
      setErrors(['Name and description are required']);
    } else {
        const resource = {
          name,
          user_id,
        description,
        ref_link,
        cat_id
      };
      await dispatch(addResource(resource));
      await dispatch(getResources());
      setErrors([]);
      setName('');
      setDescription('');
      setRef_Link('');
      setCatId(1);
      setResourceAdded(true);
      setTimeout(() => {setResourceAdded(false)}, 2.5*1000);
    }
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
      className='authForm addResourceForm'
      onSubmit={handleSubmit}
    >
      {resourceAdded && <div>Resource Added!</div>}

      <div className="errors">
          {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
          ))}
      </div>
      <div className="inputHolder">
        {/* <label>Name</label> */}
        <input
            type='text'
            value={name}
            placeholder='Name'
            onChange={updateName}
            maxLength="80"
            required
            />
      </div>
      <div className="inputHolder">
        {/* <label>Description</label> */}
        <input
            type='text'
            value={description}
            onChange={updateDescription}
            placeholder='Description'
            required/>
      </div>
      <div className="inputHolder">
        {/* <label>Reference Link</label> */}
        <input
            // className="addresourceFormLINK"
            type='url'
            value={ref_link}
            pattern="https://.*"
            maxLength="100"
            placeholder="https:// {url}"
            onChange={updateRef_link}
            required />
      </div>
      <div >
        {/* <label>Category</label> */}
        <select
            value={cat_id}
            onChange={(e) => setCatId(e.target.value)}
            className="inputHolderCat"
        >
          {Object.values(categories).map((category, i) => (
              <option key={i} value={category.id}>{category.cat}</option>
          ))}
        </select>
      </div>

    <button type='submit'>Add A Resource</button>

    </form>
  )





  return resourceForm



}







export default AddResourceForm;
