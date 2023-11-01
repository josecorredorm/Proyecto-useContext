import { useContext } from "react";
import { Datacontext } from "../context/Datacontext";

const FavGallery = () => {
    const {Photos} = useContext(Datacontext)
  return (
    <div className="gallery grid-columns-5 p-3">
    {Photos.map((photo) => ((
      photo.liked ?   
      <div  
      key={photo.id} 
      style={{ backgroundImage: `url(${photo.src.tiny})`, width: '280px', height: '200px'}}> 
      </div> : <></>)
    ))}
  </div>
  );
}

export default FavGallery
