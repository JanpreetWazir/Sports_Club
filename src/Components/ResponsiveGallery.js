import React, { useState ,forwardRef} from 'react';
import '../Style/Gallery.css';
import img1 from '../img/image1.jpg';
import img2 from '../img/image2.jpg';
import img3 from '../img/image3.jpg';
import img4 from '../img/image4.jpg';
import img5 from '../img/image5.jpg';
import img6 from '../img/image6.jpg';
import img7 from '../img/image7.jpg';
import img8 from '../img/image8.jpg';
import img9 from '../img/image9.jpg';



const ResponsiveGallery = forwardRef((props, ref) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const getImagePath = (i) => {
    switch (i) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      case 4:
        return img4;
      case 5:
        return img5;
        case 6:
        return img6;
        case 7:
        return img7;
        case 8:
        return img8;
        case 9:
        return img9;
    
    }
  };
  const imageMap = new Map();
  for (let i = 1; i <= 9; i++) {
    imageMap.set(i, {
      id: i,
      src: getImagePath(i),
      alt: `Image ${i}`,
    });
  }

 

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const centerImage = selectedImage || imageMap.get(1);
  const leftImages = Array.from(imageMap.values()).slice(0, 3);
  const rightImages = Array.from(imageMap.values()).slice(3, 6);
  const leftImages2 = Array.from(imageMap.values()).slice(6, 9);
  const rightImages2 = Array.from(imageMap.values()).slice(9, 12);

  return (
    <div className='try ' ref={ref}>
      <h2   className="colorfont text-black">Visual Hub</h2>
      <div className="responsive-gallery">
        <div className="left-gallery">
          {leftImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
        <div className="left-gallery">
          {leftImages2.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
        <div className="center-gallery">
          <img
            src={centerImage.src}
            alt={centerImage.alt}
            onClick={() => handleImageSelect(null)}
          />
        </div>
        <div className="right-gallery">
          {rightImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
        <div className="right-gallery">
          {rightImages2.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ResponsiveGallery;
