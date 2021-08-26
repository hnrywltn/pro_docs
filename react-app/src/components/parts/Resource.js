import { useEffect, useState } from 'react';
import EditResourceForm from './EditResourceForm.js';
import '../Home/Home.css';


function Resource({resource}) {
  const [showform, setShowform] = useState(false);

  let dom = null;


  const editClick = () => {
    setShowform(true);
  };





  if(resource.user_id) {
    dom = (
      <div className="resource">
        <a href={resource.ref_link} target="blank">{resource.name}</a>
        <p>{resource.description}</p>
        <button
          onClick={editClick}
        >
          edit
        </button>
      </div>
    );
  };

  if(!resource.user_id) {
    dom = (
      <div className="resource">
        <a href={resource.ref_link} target="blank">{resource.name}</a>
        <p>{resource.description}</p>
      </div>
    );
  };

  if(resource.user_id && showform) {
    dom = (
      <EditResourceForm resource={resource} setShowform={setShowform}/>
    );
  };




  // console.log(resource.id);
  return dom;
}

export default Resource;
