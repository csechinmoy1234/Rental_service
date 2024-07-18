import { Link } from 'react-router-dom';
import { carsList, carsType } from '../../data';

const Cars = () => {
  return (
    <div className="bg-secondary py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h6 className="text-xl">
            Get your professional car rental & limousine services
          </h6>
          <h2 className="text-3xl md:text-5xl !leading-[1.15] capitalize font-bold my-3">
            First Class Car Rental & Limousine Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 overflow-hidden">
          {carsList.map((item, i) => (
            <Link
              to={`/car-listing/${item.name}`}
              className="relative min-h-[400px] group z-10 p-6 overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 min-h-[400px] -z-10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-md absolute inset-0 h-full group-hover:scale-110 duration-700 -z-10 object-cover"
                />
              </div>
              <h4 className="z-20 text-2xl font-bold group-hover:text-primary duration-700">
                {item.name}
              </h4>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-20">
          <h6 className="text-xl">
            Get your professional car rental & limousine services
          </h6>
          <h2 className="text-3xl md:text-5xl !leading-[1.15] capitalize font-bold my-3">
            Find Car by Type
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {carsType.map((item, i) => (
            <Link
              to={`/car-listing/${item.name}`}
              className="relative min-h-[400px] group z-10 p-6 overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 min-h-[400px] -z-10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-md absolute inset-0 h-full group-hover:scale-110 duration-700 -z-10 object-cover"
                />
              </div>
              <h4 className="z-20 text-2xl font-bold group-hover:text-primary duration-700">
                {item.name}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
