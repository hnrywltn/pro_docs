



import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { editResource, getResources } from '../../store/resource.js';
// import '../Home.css'

function EditResourceForm({resource, setShowform}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(resource.name);
    const [description, setDescription] = useState(resource.description);
    const [category, setCategory] = useState(resource.category);
    const [ref_link, setRef_link] = useState(resource.ref_link);
    const [id, setId] = useState(resource.id);




    useEffect(() => {
        dispatch(getResources());
    }, [dispatch]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(editResource({name, description, ref_link, category, id}));
        await dispatch(getResources());
        setShowform(false);
    };

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };



    const updateRef_link = (e) => {
        setRef_link(e.target.value);
    };

    let resourceForm = (
            <form className='form formstyle editRecourceForm' onSubmit={handleSubmit}>
                <div className="errors">
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    {/* <label>Name</label> */}
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={updateName} />
                </div>
                <div>
                    {/* <label>Description</label> */}
                    <input
                        type='text'
                        placeholder='Description'
                        value={description}
                        onChange={updateDescription} />
                </div>
                <div>
                    {/* <label>Reference Link</label> */}
                    <input
                        type='url'
                        value={ref_link}
                        pattern="https://.*"
                        maxLength="100"
                        placeholder="https:// {url}"
                        onChange={updateRef_link}
                    />
                </div>

                <button type='submit'>Edit</button>
            </form>
    )



    return resourceForm;
};




















export default EditResourceForm;
