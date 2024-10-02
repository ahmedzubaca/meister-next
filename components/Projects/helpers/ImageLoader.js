import Image from 'next/image';

export const ImageLoader = ({ src, imgStyle}) => {
  return (
      <Image            
        src={src}
        alt='slika'        
        width={2048}
        height={1365}
        priority
        className={imgStyle}        
      />  
  );
};