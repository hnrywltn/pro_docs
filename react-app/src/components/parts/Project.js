
import { Modal } from '../context/modal.js';
import {useEffect, useState} from 'react';


function Project({project}) {

  const [showModal, setShowModal] = useState(false);









  return (
    <>
    <div onClick={() => setShowModal(true)} className="something">
      Start Project
    </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} >
            <div className="test">
              {project.github_link}
            </div>












          </Modal>)}
          </>
  );
}


export default Project;
