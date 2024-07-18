/* eslint-disable react/prop-types */
import { FaBriefcase, FaUser } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { cars } from '../../data';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SimilarCars = ({ category }) => {
  const catFilter = (item) => {
    if (item.category.toLowerCase() === category) {
      return item;
    } else return;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-12">
      <div>
        <h5 className="text-4xl font-bold">Similar Cars</h5>
        <div className="border-t border-dashed border-white border-opacity-40 h-1 w-full my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
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
                  <h4 className="text-xl font-bold font-secondary">
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
                <div className="flex gap-x-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarCars;
