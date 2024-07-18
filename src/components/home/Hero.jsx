import { FaCheckCircle } from 'react-icons/fa';
import heroImage from '/public/images/hero.jpg';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-[60vh] md:min-h-[80vh] font-primary"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container px-4 mx-auto flex">
        <div className="bg-white bg-opacity-20 backdrop-blur-md text-white text-center p-4 md:p-12 mx-auto max-w-[850px] relative">
          <h6 className="text-xl">Plan Your Trip Now</h6>
          <h2 className="text-3xl md:text-5xl xl:text-6xl !leading-[1.15] capitalize font-bold my-3">
            Save <span className="text-primary">big</span> with our car rental
          </h2>
          <p className="opacity-75">
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>
          <div className="flex justify-center items-center mt-4">
            <button className="flex items-center gap-x-2 bg-gradient-to-br from-[#FF672F] to-[#F45B22] text-white py-4 px-12">
              Book Ride <FaCheckCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
