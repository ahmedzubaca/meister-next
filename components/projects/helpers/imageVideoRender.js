import Image from "next/image";
import ImageTransition from "@/lib/animations/imageTransition";

export const imageVideoRender = (projectImg, imgStyle, direction, slideIndex) => {
  
  const isVideo = projectImg.includes('video');

  return(
    <ImageTransition direction={direction} index={slideIndex} >
      {
        !isVideo
        ?
          <Image            
            src={projectImg}
            alt='slika'         
            width={2048}
            height={1365}
            priority
            className={imgStyle}        
          />  
        : 
          <video controls autoPlay className={imgStyle} >
              <source src={projectImg} type={`video/${projectImg.split('.').pop()}`}  />
          Your browser does not support the video tag.
          </video>
      } 
    </ImageTransition>
  )
};