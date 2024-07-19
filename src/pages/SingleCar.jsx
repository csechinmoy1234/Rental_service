import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cars } from '../data';
import { FaBriefcase, FaCar, FaUser } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import SimilarCars from '../components/cars/SimilarCars';
import { ToastContainer, toast } from 'react-toastify';

const SingleCar = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const path = pathname.split('/').pop();
  const decodedPath = decodeURIComponent(path.replace(/\+/g, ' '));

  useEffect(() => {
    if (decodedPath) {
      const carItem = cars.find((item) => item.title === decodedPath);
      setData(carItem);
    }
  }, [decodedPath, data]);

  useEffect(() => {
    if (decodedPath) {
      window.scrollTo(0, 0);
    }
  }, [decodedPath]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Form was sent successfully!');
    console.log('hello');
  };

  return (
    <div className="bg-secondary">
      <div
        className="relative z-10 bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-[60vh]"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />
        <h4 className="capitalize font-primary text-3xl md:text-5xl font-bold">
          {decodedPath}
        </h4>
      </div>

      <div className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-4 lg:p-12">
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {data.title}
              </h4>
              <p className="opacity-75 font-secondary text-sm">4 reviews</p>
              <div className="border-white border-t border-b border-dashed border-opacity-30 my-6 py-5 px-2">
                <div className="flex justify-between items-center gap-x-2">
                  <div className="flex gap-x-2 items-center opacity-90">
                    <FaUser size={25} />
                    <p className="">{data.passangers} Passengers</p>
                  </div>
                  <div className="flex gap-x-2 items-center opacity-90">
                    <FaBriefcase size={25} />
                    <p className="">{data.luggages} Luggages</p>
                  </div>
                  <div className="flex gap-x-2 items-center opacity-90">
                    <GiGearStickPattern size={25} />
                    <p className="">{data.gearbox}</p>
                  </div>
                  <div className="flex gap-x-2 items-center opacity-90">
                    <FaCar size={25} />
                    <p className="">{data.doors} Doors</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 mt-12">
                  Refueling
                </h4>
                <p className="mb-12 opacity-75 !leading-[1.8] font-secondary">
                  Meh synth Schlitz, tempor duis single-origin coffee ea next
                  level ethnic fingerstache fanny pack nostrud. Photo booth anim
                  8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse
                  nihil, flexitarian Truffaut synth art party deep v chillwave.
                  Seitan High Life reprehenderit consectetur cupidatat kogi. Et
                  leggings fanny pack, elit bespoke vinyl art party Pitchfork
                  selfies master cleanse.
                </p>

                <h4 className="text-xl md:text-2xl font-bold mb-4">Car Wash</h4>
                <p className="mb-12 opacity-75 !leading-[1.8] font-secondary">
                  Craft beer elit seitan exercitation, photo booth et 8-bit kale
                  chips proident chillwave deep v laborum. Aliquip veniam
                  delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                  Selfies iPhone Kickstarter, drinking vinegar jean vinegar
                  stumptown yr pop-up artisan sunt. Craft beer elit seitan
                  exercitation, photo booth.
                </p>

                <h4 className="text-xl md:text-2xl font-bold mb-4">
                  No Smoking
                </h4>
                <p className="mb-12 opacity-75 !leading-[1.8] font-secondary">
                  See-through delicate embroidered organza blue lining luxury
                  acetate-mix stretch pleat detailing. Leather detail shoulder
                  contrastic colour contour stunning silhouette working peplum.
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline stitching cropped
                  jacket. Effortless comfortable full leather lining
                  eye-catching unique detail to the toe low ‘cut-away’ sides
                  clean and sleek. Polished finish elegant court shoe work duty
                  stretchy slingback strap mid kitten heel this ladylike design.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-2 -mt-12 md:-mt-20 lg:-mt-40 z-[1000]">
              <div className="border border-opacity-30 border-white rounded-md overflow-hidden">
                <div className="bg-black bg-opacity-90 p-4 text-center">
                  <h5 className="text-3xl md:text-4xl font-bold font-secondary">
                    ${data.price}{' '}
                    <span className="text-base opacity-75 font-extralight">
                      /per day
                    </span>
                  </h5>
                </div>
                <div className="py-6 px-4 xl:px-6">
                  <form action="" onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="mb-6">
                      <label htmlFor="name" className="">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Chinmoy Dutta"
                        required
                        className="w-full bg-transparent border border-white border-opacity-45 rounded-md h-12 mt-2 px-3 py-2"
                      />
                    </div>
                    {/* email */}
                    <div className="mb-6">
                      <label htmlFor="email" className="">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="chinmoy201920@gmail.com"
                        required
                        className="w-full bg-transparent border border-white border-opacity-45 rounded-md h-12 mt-2 px-3 py-2"
                      />
                    </div>
                    {/* phone */}
                    <div className="mb-6">
                      <label htmlFor="phone" className="">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+918822094486"
                        className="w-full bg-transparent border border-white border-opacity-45 rounded-md h-12 mt-2 px-3 py-2"
                      />
                    </div>
                    {/* address */}
                    <div className="mb-6">
                      <label htmlFor="address" className="">
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        required
                        placeholder="New York"
                        className="w-full bg-transparent border border-white border-opacity-45 rounded-md h-12 mt-2 px-3 py-2"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary py-3 px-4 rounded-md"
                    >
                      Feel Free to Connect
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {data.category && (
            <SimilarCars category={data?.category.toLowerCase()} />
          )}
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SingleCar;
