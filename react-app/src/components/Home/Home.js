import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../../store/resource.js';
import Resource from '../parts/Resource.js';
import './Home.css';


function Home() {
  const dispatch = useDispatch();
  const resources = useSelector(state => {
    return Object.values(state.resources);
  });

  useEffect(() => {
    dispatch(getResources());
  }, [dispatch]);




  return (
    <div className="home-container">
      {/* <h1>HOME !!!!</h1> */}
      <div className="resources-container">
        {resources?.map(resource => {
          return <Resource key={resource.id} resource={resource} />;
        })}
      </div>

    </div>
  );
}

export default Home;
