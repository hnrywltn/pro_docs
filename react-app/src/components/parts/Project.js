
import { Modal } from '../context/modal.js';
import {useEffect, useState} from 'react';
import  EditProjectForm  from './EditProjectForm.js';


function Project({project}) {

  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);


  function editClick() {
    setShowEditForm(true);
  }


  let editDom = null;

  if (showEditForm) {
    editDom = <EditProjectForm project={project} setShowEditForm={setShowEditForm} />
  }

  if (!showEditForm) {
    editDom = (
      <div className="projectPreview-container">
        <p>{project.github_link}</p>
        <p>{project.description}</p>
        <button onClick={editClick}>Edit / Delete</button>
      </div>
    )
  }




  return (
    <>
    <div onClick={() => setShowModal(true)} className="something">
      Start Project
    </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} >


            {editDom}


          </Modal>)}
          </>
  );
}


export default Project;
