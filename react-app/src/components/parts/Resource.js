
import '../Home/Home.css';


function Resource({resource}) {


  // console.log(resource.id);
  return <div className="resource">
    <a href={resource.ref_link} target="blank">{resource.name}</a>
    <p>{resource.description}</p>
  </div>;
}

export default Resource;
