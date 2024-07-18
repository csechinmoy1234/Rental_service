import { processes } from '../../data';

const Process = () => {
  return (
    <div className="bg-tertiary py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h6 className="text-xl">Plan Your Trip Now</h6>
          <h2 className="text-3xl md:text-5xl !leading-[1.15] capitalize font-bold my-3">
            Quick & easy car rental
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-11">
          {processes.map((item, i) => {
            const { img, title, desc } = item;
            return (
              <div className="text-center" key={i}>
                <img src={img} alt="process" className="mx-auto" />
                <h4 className="text-xl md:text-2xl font-bold capitalize mb-3">
                  {title}
                </h4>
                <p className="opacity-75 font-secondary">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
