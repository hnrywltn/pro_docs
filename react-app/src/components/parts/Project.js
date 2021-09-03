
import { Modal } from '../context/modal.js';
import {useEffect, useState} from 'react';
import  EditProjectForm  from './EditProjectForm.js';


function Project({project, technologies}) {

  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);


  function editClick() {
    setShowEditForm(true);
  }

  let technologiesArray = Object.values(technologies);

  let techIdArray = JSON.parse(project?.tech_array);
  let projectTechnologies = technologiesArray?.filter(technology => {
    return techIdArray.includes(technology.id);
  });


  let editDom = null;

  if (showEditForm) {
    editDom = <EditProjectForm project={project} setShowEditForm={setShowEditForm} />
  }

  if (!showEditForm) {
    editDom = (
      <div className="projectPreview-container">
        <a href={project.github_link} rel="noreferrer" target="blank" className="projectPreview-githublink">{project.github_link}</a>
        <p className="projectPreview-description">{project.description}</p>
        <h4 className="projectPreview-techarray-container-title">Technologies</h4>
        <h4 className="projectPreview-description-title">Description</h4>
        <div className="projectPreview-techarray-container">
          {projectTechnologies?.map(technology => {
            return <p>{technology.name}</p>
          }
          )}
        </div>
        <button onClick={editClick}>Edit / Delete</button>
      </div>
    )
  }




  return (
    <>
    <div onClick={() => setShowModal(true)} className="projectDiv">
      {project.github_link}
    </div>

    {showModal && (
      <Modal onClose={() => setShowModal(false)} >
        {editDom}
      </Modal>)}
    </>
  );
}


export default Project;
