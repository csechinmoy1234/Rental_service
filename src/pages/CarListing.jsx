import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cars, whatWeOffer } from '../data';
import banner12 from '/images/banner12.jpg';
import { FaBriefcase, FaCheck, FaUser } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';

const CarListing = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/').pop();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const catFilter = (item) => {
    if (
      item.category.toLowerCase() === path.toLowerCase() ||
      item.type.toLowerCase() === path.toLowerCase()
    ) {
      return item;
    } else return;
  };

  return (
    <div className="bg-secondary">
      <div
        className="relative z-10 bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-[60vh]"
        style={{ backgroundImage: `url(${banner12})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />
        <h4 className="capitalize font-primary text-3xl md:text-5xl font-bold">
          {path}
        </h4>
      </div>
      <div className="container mx-auto px-4 max-w-[800px] py-12 md:py-20 xl:py-28">
        <div className="flex flex-col gap-y-6 md:gap-y-11">
          {cars.filter(catFilter).map((item, i) => (
            <div key={i}>
              <Link to={`/single-car/${item.title}`}>
                {' '}
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-w-full h-auto rounded-xl"
                />
              </Link>

              <div className="flex justify-between items-center gap-x-2 my-4">
                <Link to={`/single-car/${item.title}`}>
                  {' '}
                  <h4 className="text-xl md:text-2xl font-bold font-secondary">
                    {item.title}
                  </h4>
                </Link>
                <h4 className="text-xl md:text-3xl font-bold font-secondary">
                  ${item.price}{' '}
                  <span className="opacity-60 text-sm !font-normal">
                    /per day
                  </span>
                </h4>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-20">
                <div className="flex gap-x-3">
                  <div className="flex flex-col gap-y-1 items-center opacity-90">
                    <FaUser />
                    <p className="text-sm">{item.passangers}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 items-center opacity-90">
                    <FaBriefcase />
                    <p className="text-sm">{item.luggages}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 items-center opacity-90">
                    <GiGearStickPattern />
                    <p className="text-sm">{item.gearbox}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1 opacity-75">
                  {whatWeOffer.map((item, i) => (
                    <div className="flex gap-x-1" key={i}>
                      <FaCheck />
                      <p className="text-sm font-extralight font-secondary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListing;
