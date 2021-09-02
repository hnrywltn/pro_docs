import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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




  const [gitHubHandle, setGitHubHandle] = useState('');
  const [person, setPerson] = useState(null);
  const [publicRepos, setPublicRepos] = useState(null);




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


  let emptyGithubDom = (
    <div className="empty-github-container">
      <h3>Enter a github handle to search github!</h3>
    </div>
  );

  let failedSearchDom = (
    <div className="failedSearch-github-container">
      <h3>Make sure the github user is public and spelled correctly!</h3>
    </div>
  );


    function createMatrix(catTuples, matrix = []) {
      if (!catTuples.length) {
        return matrix;
      }
      const [catId] = catTuples[0];
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



    const updateGitHubHandle = (e) => {
      setGitHubHandle(e.target.value);
    }

    async function updatePublicRepos (per) {
      const reposStr = await fetch(per?.repos_url);
      const repos = await reposStr.json();
      console.log('repos', repos);
      setPublicRepos(repos);
    }


    async function handleGitHubSubmit(e) {
      e.preventDefault();

      const response = await fetch(`https://api.github.com/users/${gitHubHandle}`);
      const data = await response.json();
      setPerson(data);
      console.log('person', person);
      setGitHubHandle('');
      updatePublicRepos(data);
    }







  return (
    <div className="home-container">


      <div className="resources-container">
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


    <div className="githubAPI-container">
      <h2>GitHub</h2>
      {!person && emptyGithubDom}
      {person?.message === 'Not Found' && failedSearchDom}
      <form
        onSubmit={handleGitHubSubmit}
        className="github-form"
      >
        <input
          type="text"
          placeholder="GitHub Username"
          value={gitHubHandle}
          onChange={updateGitHubHandle}
        />
        <button type="submit">Search</button>
      </form>
      {person?.name && <div className="github-info-container">
        {person?.name&&<img src={person.avatar_url} alt="github avatar" />}
        {person?.name&&<h3>{person.name}</h3>}
        {person?.name&&<p>{person.html_url}</p>}
        {person?.name&&<div className="publicRepos-container">
          {publicRepos?.map((repo, i) => {
            return (
              <div key={i} className="publicRepo">
                <a target="blank" href={repo.clone_url}>{repo.name}</a>
                <p>Language: {repo.language ? repo.language : 'Not listed'}</p>
                <p>{repo.pushed_at}</p>
              </div>
            )
          })}
        </div>}




      </div>}
      {/* {!person?.name &&<div>Find people on github!!</div>} */}
    </div>


    </div>
  );
}

export default Home;
