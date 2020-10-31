/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
  children: any;
  customButtons?: any;
  deviceType: string;
  className?: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const CarouselComponent: React.FC<CarouselProps> = ({
  children,
  customButtons,
  deviceType,
}) => {
  return (
    <Carousel
      ssr
      partialVisible
      infinite
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      renderButtonGroupOutside
      customButtonGroup={customButtons}
      containerClass="carousel-container"
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
