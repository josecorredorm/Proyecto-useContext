import { useContext } from "react";
import IconHeart from "./IconHeart";
import { Datacontext } from "../context/Datacontext";
const Gallery = () => {
  const { Photos, setPhotos } = useContext(Datacontext);

  const addFav = (id) => {
    const FavPhotos = Photos.map((e) => {
          if(e.id === id){
            return {...e, liked: !e.liked}
          }
          return e
    })
  setPhotos(FavPhotos);
  }
  return (
  <div className="gallery grid-columns-5 p-3">
    {Photos.map((photo) => (
      <div 
      onClick={() => addFav(photo.id)}
      key={photo.id} 
      style={{ backgroundImage: `url(${photo.src.tiny})`, width: '280px', height: '200px'}}> 
      <IconHeart filled={photo.liked}/>
      </div>
    ))}
  </div>
  );
};
export default Gallery;
