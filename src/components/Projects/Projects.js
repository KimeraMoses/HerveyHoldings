import React from "react";

//===REDUX IMPORTS

//===REACT ELESTIC CAROUSEL IMPORTS
import Carousel from "react-elastic-carousel";

//===COMPONENTS IMPORTS
import styles from "./CourseUnitCarousel.module.css";

const breakpoints = [
  { width: 1, itemsToShow: 1.2 },
  { width: 500, itemsToShow: 2.2 },
  { width: 780, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4.2 },
];

const ProjectsCarousel = () => {
  const isLoading = false;

  return (
    <Carousel
      className={`${styles.gpa__project_carousel_wrapper}`}
      breakPoints={breakpoints}
      pagination={false}
      easing="ease"
      tiltEasing="ease"
    >
      {isLoading
        ? [...Array(8).keys()].map((index) => {
            return <TourCardSkeleton type="slider" />;
          })
        : FilteredTours.slice(0, 20).map((tour) => {
            return (
              <TourCard
                TourImage={tour.imageCover}
                TourTitle={tour.name}
                TourSlug={tour.slug}
                NumDays={tour.duration}
                NumNights={tour.duration - 1}
                TourDescription={tour.description}
                TourRating={tour.ratingsAverage}
              />
            );
          })}
    </Carousel>
  );
};
export default ProjectsCarousel;
