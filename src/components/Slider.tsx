import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SLIDERIMG } from "../constants";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="relative overflow-hidden">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        itemClass={'h-full w-full'}
        containerClass={'h-full max-h-[200px] md:max-h-[320px] lg:max-h-[660px]'}
        draggable={false}
        focusOnSelect={false}
        infinite
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        swipeable
      >
        {SLIDERIMG.map((item, index) => (
          <img key={index} src={item} className='object-cover w-full h-full max-h-[200px] md:max-h-[320px] lg:max-h-[660px]' />
        ))}
      </Carousel>
    </section>
  )
}

export default Slider