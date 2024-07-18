// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import './Testimonial.css';
import { testimonials } from '../../data';

const Testimonial = () => {
  return (
    <div className="bg-secondary py-12 md:py-20 xl:py-28">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-5xl !leading-[1.22] capitalize font-medium my-3 max-w-[800px] mb-12 md:mb-20">
            We trive to meet the needs of our clients and we value their
            opinions about our work
          </h2>
        </div>
        <Swiper
          grabCursor={true}
          centeredSlides={false}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Pagination]}
          className="mySwiper mt-6 md:pb-32"
        >
          {testimonials?.map((item, i) => (
            <SwiperSlide className="p-3" key={i}>
              <div className="border-l border-primary flex flex-col gap-y-2 p-5 md:p-8">
                <h5 className="text-xl font-medium">{item.title}</h5>
                <div className="flex gap-x-2 text-primary">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="opacity-75 font-secondary">{item.review}</p>

                <p className="uppercase text-sm font-medium font-secondary text-primary mt-3">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
