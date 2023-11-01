import { useState } from "react"
import { Datacontext } from "./Datacontext"
import {photos} from "../../public/photos.json"
const Dataprovider = ({children}) => {
    const [Photos, setPhotos] = useState(photos)
  return (
    <Datacontext.Provider value={{Photos, setPhotos}}>
      {children}
    </Datacontext.Provider>
  )
}

export default Dataprovider
