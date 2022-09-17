import React, { lazy } from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const Gallery = ({ images, scrollPosition }) => (
  <div>
    {images.map((image) => (
      <LazyLoadImage
        key={image.id}
        alt={image.alt}
        height={"200"}
        loading={"lazy"}
        // Make sure to pass down the scrollPosition,
        // this will be used by the component to know
        // whether it must track the scroll position or not
        scrollPosition={scrollPosition}
        src={image.imgUrl}
        // width={image.width}
      />
    ))}
  </div>
);
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(Gallery);
