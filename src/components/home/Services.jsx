import img1 from '/public/images/img1.jpg';
import img2 from '/public/images/img2.jpg';

const Services = () => {
  return (
    <div className="bg-tertiary py-12 md:py-20 overflow-hidden">
      <div className="lg:ml-48 xl:ml-60 sm:ml-20 m-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-20 items-center">
          <div className="col-span-1">
            <h2 className="text-3xl md:text-5xl max-w-[600px] !leading-[1.15] capitalize font-light my-3">
              We Care Of Your Safety And Convenience
            </h2>
            <p className="uppercase text-primary tracking-widest">
              FINEST CAR RENTAL
            </p>
            <p className="max-w-[650px] opacity-75 mt-4 leading-normal sm:text-lg">
              Facilisi cras fermentum odio eu feugiat. In fermentum et
              sollicitudin ac ori accumsan sit amet nulla facilisi morbi tempus
              iaculis urna id. Aenean euismod elementum nisi quis eleifend quam
              adipiscing vitae dipiscing.
            </p>

            <div>
              <button className="font-medium flex justify-center items-center gap-x-2 bg-gradient-to-br from-[#FF672F] to-[#F45B22] text-white py-4 px-12 mt-6">
                Book Now
              </button>
            </div>
          </div>

          {/* images */}
          <div className="col-span-1  gap-x-4 sm:gap-x-12 justify-end">
            <div className="flex">
              <img
                src={img1}
                alt="service"
                className="w-full h-auto object-cover max-h-[550px]"
              />
              <img
                src={img2}
                alt="service"
                className="w-full h-auto object-cover max-h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
