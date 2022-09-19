import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const Gallery = ({ images, scrollPosition, onClick }) => (
  <>
    {images.map((image) => (
      <LazyLoadImage
        key={image.id}
        alt={image.alt}
        height={200}
        loading={"lazy"}
        src={image.imgUrl}
        scrollPosition={scrollPosition}
        onClick={onClick.bind(this, image.id)}
      />
    ))}
  </>
);

export default trackWindowScroll(Gallery);
