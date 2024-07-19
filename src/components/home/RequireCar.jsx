import BookingForm from './BookingForm';
import headphone from '/public/images/headphone.png';

const RequireCar = () => {
  return (
    <div className="bg-secondary py-12 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-32">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl xl:text-5xl !leading-[1.15] capitalize font-medium my-3">
              Do You Require A Car?
              <br /> Get In Touch With Us
            </h2>
            <p className="uppercase text-primary tracking-widest">
              FINEST CAR RENTAL
            </p>
            <p className="max-w-[500px] tracking-wider mt-4">
              Suspendisse in est ante in nibh mauris cursus mattis molestie
              laorei id donec ultrices tincidunt arcu non sodales neq.
            </p>
            <div className="flex items-center gap-x-3 mt-6">
              <img
                src={headphone}
                alt="headphone"
                className="max-w-[50px] h-auto"
              />
              <div>
                <p className="text-lg">Phone: +918822094486</p>
                <p className="text-lg">Email: chinmoy201920@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequireCar;
