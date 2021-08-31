import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Resource from '../parts/Resource.js';
import Project from '../parts/Project.js';
import { getResources } from '../../store/resource.js';
import { getProjects, addProject } from '../../store/project.js';
import {getTechnologies} from '../../store/technology.js';
import {getCategories} from '../../store/category.js';
import './Projects.css';

function Projects() {

  const dispatch = useDispatch();
  const history = useHistory();

  const resources = useSelector(state => {
    return state.resources;
  });
  const session = useSelector(state => {
    return state.session;
  });
  const projects = useSelector(state => {
    return state.projects;
  });
  const technologies = useSelector(state => {
    return state.technologies;
  });

  const projectsArray = Object.values(projects);


  const user = session.user;

  const usersProjects = projectsArray.filter(project => project.user_id === user.id);



  const [user_id] = useState(user.id);
  const [resources_array, setResourcesArray] = useState([]);
  const [tech_array, setTechArray] = useState([]);
  const [wireframingArray, setWireframingArray] = useState([]);
  const [description, setDescription] = useState('');
  const [github_link, setGithubLink] = useState('');
  const [complete, setComplete] = useState(false);


  useEffect(() => {
    dispatch(getResources());
    dispatch(getProjects());
    dispatch(getTechnologies());
    dispatch(getCategories());
  }, [dispatch]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      user_id: user.id,
      resources_array: JSON.stringify(resources_array),
      tech_array: JSON.stringify(tech_array),
      wireframingArray: JSON.stringify(wireframingArray),
      description,
      github_link,
      complete
    };
    await dispatch(addProject(project));
    await dispatch(getProjects());
  };


  const updateResourcesArray = (e) => {
    setResourcesArray(resources_array.push(e.target.value));
  };



  const updateTechArray = (e) => {
    setTechArray(tech_array.push(e.target.value));
    console.log(tech_array);
  };





  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateGithubLink = (e) => {
    setGithubLink(e.target.value);
  };

  // const updateComplete = (e) => {
  //   setComplete(e.target.value);
  // };




  let projectsDom = (
    <>
      <div className="projects-container">


        <form
          className="projects-form"
          onSubmit={handleSubmit}
        >
          <h2>Add a Project</h2>
          <div className="formGithubLink">
            <label>Github_link</label>
            <input
              type="text"
              value={github_link}
              onChange={updateGithubLink}
            />
          </div>
          <div className="formDesc">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={updateDescription}
            />
          </div>
          <div className="formTech">
            <h2>Technologies</h2>
            {Object.values(technologies).map(technology => {
              return (
                <div className="techBox" key={technology.id}>
                  {technology.name}
                  <input type="checkbox" value={technology.id} onChange={updateTechArray}/>
                </div>
              );
            })}
          </div>
          {/* <div className="formRes">
            <h2>Resources</h2>
            {Object.values(resources).map(resource => {
              return (
                <div className="resBox" key={resource.id}>
                  {resource.name}
                  <input type="checkbox" value={resource.id} onChange={updateResourcesArray}/>
                </div>
              );
            })}
          </div> */}
          <button type="submit">Submit</button>

        </form>




        <div className="projectList">
          {usersProjects && usersProjects.map(project => {
            return (
              <Project project={project} key={project.id} />
            )
          })}
        </div>
      </div>
    </>
  );


  return projectsDom;
}










export default Projects;
