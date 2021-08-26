import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getResources } from '../../store/resource.js';
import { getCategories } from '../../store/category.js';
import Resource from '../parts/Resource.js';
import AddResourceForm from '../parts/AddResourceForm.js';
import './Home.css';


function Home() {
  const dispatch = useDispatch();
  const resources = useSelector(state => {
    return state.resources;
  });
  const categories = useSelector(state => {
    return state.categories;
  });
  const session = useSelector(state => {
    return state.session;
  });

  const user = session.user;

  useEffect(() => {
    dispatch(getResources());
    dispatch(getCategories());
  }, [dispatch]);



  const resourceList = Object.values(resources);


  // const organizedResources = resources.map(resource => {
    const catIds = resourceList.map(resource => {
      return [resource.cat_id, resource.id];
      }).sort(function(a, b) {
        return a[0] - b[0];
    });






    function createMatrix(catTuples, matrix = []) {
      if (!catTuples.length) {
        return matrix;
      }
      const [catId, resourceId] = catTuples[0];
      const resourcesWithCatId = resourceList.filter(resource => {
        return resource.cat_id === catId;
      });
      const newMatrix = matrix.concat(Array(resourcesWithCatId));
      const newCatTuples = catTuples.slice(resourcesWithCatId.length);
      return createMatrix(newCatTuples, newMatrix);
    }




    let resourceMatrix = createMatrix(catIds);
    let personalResources = resourceList.filter(resource => {
      return resource.user_id === user.id;
    });

    // console.log('resARRAY', resources);
    // console.log('catIds', catIds);
    // console.log('resourceMatrix', resourceMatrix);






  return (
    <div className="home-container">

      <div className="resourceAdd">
        <h2>Add a Resource</h2>
        <AddResourceForm categories={categories} />
      </div>

      <div className="personalResources">
        <h2>Your Resources</h2>
        {personalResources.map(resource => {
          return <Resource key={resource.id} resource={resource} />;
        })}
      </div>


      <div className="resources-container">
        {resourceMatrix?.map((category, i) => {
          return (
            <div key={i} className="cat-container">
              <h2>{categories[category[0].cat_id]?.cat}</h2>
              {category?.map(resource => {
                return (
                  !resource.user_id&&<Resource key={resource.id} resource={resource} />
                );
              })}
            </div>
          );
        })}
      </div>




    </div>
  );
}

export default Home;
