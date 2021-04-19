import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from './WithStyles';
const Testimonials = () => {
    const [clientReviews, setClientReviews] = useState([]);
    useEffect(() => {
        fetch("https://travel-solution-server.herokuapp.com/all-reviews")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setClientReviews(data);
        })
        .catch(err => console.log(err))
    },[])
    // console.log(clientReviews);
    return (
        <div className="container py-4">
            <h3 className='text-center color-brand font-weight-bold my-3'>Testimonials</h3>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customButtonGroup={<CustomButtonGroupAsArrows />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable

                // End Test

                // additionalTransfrom={0}
                // // arrows
                // arrows={false}
                // autoPlay
                // autoPlaySpeed={3000}
                // centerMode={false}
                // className=""
                // containerClass="container-with-dots"
                // dotListClass=""
                // draggable
                // focusOnSelect={false}
                // infinite
                // itemClass=""
                // keyBoardControl
                // minimumTouchDrag={80}
                // renderButtonGroupOutside={false}
                // renderDotsOutside={false}
                // responsive={{
                //     desktop: {
                //     breakpoint: {
                //         max: 3000,
                //         min: 1024
                //     },
                //     items: 3,
                //     partialVisibilityGutter: 40
                //     },
                //     mobile: {
                //     breakpoint: {
                //         max: 464,
                //         min: 0
                //     },
                //     items: 1,
                //     partialVisibilityGutter: 30
                //     },
                //     tablet: {
                //     breakpoint: {
                //         max: 1024,
                //         min: 464
                //     },
                //     items: 2,
                //     partialVisibilityGutter: 30
                //     }
                // }}
                // showDots
                // sliderClass=""
                // slidesToSlide={2}
                // swipeable
                >
               {
                   clientReviews.length > 0 
                   && clientReviews.map((clientReview) => <WithStyles key={clientReview._id} review={clientReview}/>)
               }
               
            </Carousel>
            {
                clientReviews.length < 1 && <div className="d-flex justify-content-center w-100 mx-auto text-center">
                    <CircularProgress color="secondary" />
                </div>
            }
        </div>
    );
};

function CustomButtonGroupAsArrows ({ next, previous }) {
  return (
    <div className="text-center mt-4">
      {/* <h4>These buttons can be positioned anywhere you want on the screen</h4> */}
      <button className="btn btn-success btn-outlie-info rounded-circle mx-1 font-weight-bold" onClick={previous}>&#8882;</button>
      <button className="btn btn-success btn-outlie-info  rounded-circle mx-1 font-weight-bold" onClick={next}>&#8883;</button>
    </div>
  );
}

export default Testimonials;
