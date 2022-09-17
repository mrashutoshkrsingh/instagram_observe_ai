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
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(Gallery);
