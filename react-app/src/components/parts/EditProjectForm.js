import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { editProject, getProjects, deleteProjectById } from '../../store/project.js';
// import '../Home.css'

function EditProjectForm({project, setShowEditForm}) {
    const history = useHistory();
    const dispatch = useDispatch();


    const [description, setDescription] = useState(project.description);
    const [id] = useState(project.id);
    const [github_link, setGithub_link] = useState(project.github_link);




    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(editProject({github_link, description, id}));
        await dispatch(getProjects());
        setShowEditForm(false);
    };

    const updateGithubLink = (e) => {
        setGithub_link(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    const deleteClick = async (e) => {
        e.preventDefault();
        await dispatch(deleteProjectById(id));
        await dispatch(getProjects());
        setShowEditForm(false);
    };

    const cancelClick = async (e) => {
        setShowEditForm(false);
    };


    let projectForm = (
      <>
            <form
              className='editProjectForm'
              onSubmit={handleSubmit}
            >
                <input
                    className='editProjectLINK__input'
                    type='url'
                    value={github_link}
                    pattern="https://github.com/.*"
                    maxLength="100"
                    placeholder="https://github.com/{githubhandle}/{projectname}"
                    onChange={updateGithubLink}
                    required />
                <input
                    className='editProjectDESC__input'
                    type='text'
                    value={description}
                    required
                    onChange={updateDescription} />

                <button className="projectbttnEDIT" type='submit'>Edit</button>
            </form>
            <button className="projectbttnDELETE" onClick={deleteClick}>
              Delete Project
            </button>
            <button className="projectbttnCANCEL" onClick={cancelClick}>
              Cancel
            </button>
      </>
    )



    return projectForm;
};





















export default EditProjectForm;
