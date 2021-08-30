import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Resource from '../parts/Resource.js';
import Project from '../parts/Project.js';
import { getResources } from '../../store/resource.js';
import { getProjects } from '../../store/project.js';

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

  const projectsArray = Object.values(projects);


  const user = session.user;

  const usersProjects = projectsArray.filter(project => project.user_id === user.id);



  useEffect(() => {
    dispatch(getResources());
    dispatch(getProjects());
  }, [dispatch]);









  let projectsDom = (
    <div >
      {usersProjects.map(project => {
        return (
          <Project project={project} key={project.id} />
        )
      })}
    </div>
  );


  return projectsDom;
}










export default Projects;
