import { ImageLoader } from "./ImageLoader";
import ImageTransition from "@/lib/animations/imageTransition";

export const imageVideoRender = (projectImg, imgStyle, direction, slideIndex) => {
  const getFileType = (filename) => {
    const extension = filename.split('.').pop();
    if (['webp','jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
      return 'video';
    }
    return null;
  };  
  const fileType = getFileType(projectImg);

  return( 
    
    fileType === 'image'
    ?
    <ImageTransition direction={direction} index={slideIndex} >
      <ImageLoader src={projectImg}
        imgStyle={imgStyle} 
      /> 
    </ImageTransition>
    : 
      fileType === 'video' 
      ?  
      <ImageTransition direction={direction} index={slideIndex} >    
        <video controls autoPlay className={imgStyle} >
            <source src={projectImg} type={`video/${projectImg.split('.').pop()}`}  />
        Your browser does not support the video tag.
        </video>
      </ImageTransition>
        
      : null 
  )
};