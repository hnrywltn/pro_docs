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

  const usersProjects = projectsArray.filter(project => project.user_id === user.id).reverse();



  const [resources_array] = useState([]);
  const [tech_array, setTechArray] = useState([]);
  const [wireframing_array] = useState(null);
  const [description, setDescription] = useState('');
  const [github_link, setGithubLink] = useState('');
  const [complete] = useState(false);


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
      wireframing_array: JSON.stringify(wireframing_array),
      description,
      github_link,
      complete
    };
    setGithubLink('');
    setDescription('');
    setTechArray([]);
    window.location.reload();
    await dispatch(addProject(project));
    await dispatch(getProjects());
  };




  const updateTechArray = (e) => {
    let array = [];
    if (!tech_array.includes(Number(e.target.value))) array = tech_array.concat(Number(e.target.value));
    if (tech_array.includes(Number(e.target.value))) array = tech_array.filter(tech => tech !== Number(e.target.value));

    setTechArray(array);
    console.log(tech_array);
  };




  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateGithubLink = (e) => {
    setGithubLink(e.target.value);
  };



  let emptyProjectDom = () => (
    <div className="empty-project-container">
      <h1>You have no projects!</h1>
      <h2>Create a new project above!</h2>
    </div>
  );



  let projectsDom = (
    <>
      <div className="projects-container">
        <div className="projects-description">
          Keep track of past, current, and future projects. Add a description, github link, and technologies on the left and view your project information below.
        </div>
        <div className="emptyProjectDom projectList">
          {!usersProjects.length && emptyProjectDom()}
        </div>
        <div className="projectList">
          {usersProjects && usersProjects.map(project => {
            return (
              <Project project={project} key={project.id} technologies={technologies} />
            )
          })}
        </div>

        <form
          className="projects-form"
          onSubmit={handleSubmit}
        >
          {/* <h2>Add a Project</h2> */}
          <div className="formGithubLink">
            {/* <label>Github_link</label> */}
            <input
              // className="addProjectFormLINK"
              type='url'
              value={github_link}
              pattern="https://github.com/.*"
              maxLength="100"
              placeholder="https://github.com/{githubhandle}/{projectname}"
              onChange={updateGithubLink}
            required />
          </div>
          <div className="formDesc">
            {/* <label>Description</label> */}
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={updateDescription}
              maxLength="500"
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
          <button className="projectBttn" type="submit">Add a Project</button>

        </form>




      </div>
    </>
  );


  return projectsDom;
}










export default Projects;
