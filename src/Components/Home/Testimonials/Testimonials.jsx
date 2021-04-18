import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from './WithStyles';
const Testimonials = () => {
    return (
        <div className="container py-4">
            <h3 className='text-center color-brand font-weight-bold my-3'>Testimonials</h3>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
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
                slidesToSlide={2}
                swipeable
                >
               {/* <div className="row"> */}
               {
                   [1,2,2,3,5].map((data, idx) => <WithStyles key={idx} image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" idx={idx}/>)
               }
               
               {/* </div> */}
                
            </Carousel>
        </div>
    );
};

export default Testimonials;