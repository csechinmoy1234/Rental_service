import { useState } from 'react';
import { carsList, time } from '../../data';
import { toast } from 'react-toastify';

const BookingForm = () => {
  const [carSelectActive, setCarSelectActive] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');
  const [pickUpTimeActive, setPickUpTimeActive] = useState(false);
  const [pickUpTime, setPickUpTime] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickUpDate || !pickUpTime || !selectedCar || !pickUpLocation) {
      toast.warning('All field is required.');
    } else {
      console.log(pickUpDate, pickUpTime, selectedCar);
      toast.success('Form was sent Successfully!');
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl md:text-5xl xl:text-5xl !leading-[1.15] capitalize font-medium my-3">
          Ride Details / Distance
        </h2>
        <p className="max-w-[600px] tracking-wider mt-4">
          {` Complete the form below and we'll contact you as soon as possible.`}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-[600px] flex flex-col gap-y-7 mt-12"
      >
        {/* select a car */}
        <div
          className="relative w-full h-10 border-b border-white cursor-pointer z-10"
          onClick={() => {
            setCarSelectActive((prev) => !prev);
          }}
        >
          <h4 className="absolute top-1/2 -translate-y-1/2 left-4 z-[100]">
            {selectedCar ? selectedCar : 'Select A Car'}
          </h4>
          <div
            className={`absolute top-[111%] w-full text-black select-box bg-white border border-tertiary flex flex-col max-h-[300px] overflow-y-auto z-[100] ${
              carSelectActive ? 'block' : 'hidden'
            }`}
          >
            {carsList.map((item, i) => (
              <div
                value={selectedCar}
                key={i}
                className="hover:bg-primary hover:text-white p-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setCarSelectActive(false);
                  setPickUpTimeActive(false);
                  setSelectedCar(item.name);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        {/* pick up location */}
        <div>
          <input
            type="text"
            placeholder="Pick Up Location"
            value={pickUpLocation}
            onChange={(e) => {
              setCarSelectActive(false);
              setPickUpTimeActive(false);
              setPickUpLocation(e.target.value);
            }}
            className="w-full h-12 px-3 bg-transparent border-b border-white focus:outline-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-end gap-y-6">
          <div className="w-full sm:w-1/2 pr-2">
            {/* select pick up time */}
            <div
              className="relative w-full h-10 border-b border-white cursor-pointer"
              onClick={() => {
                setPickUpTimeActive((prev) => !prev);
              }}
            >
              <h4 className="absolute top-1/2 -translate-y-1/2 left-4">
                {pickUpTime ? pickUpTime : 'Select Pick Up Time'}
              </h4>
              <div
                className={`absolute top-[111%] w-full text-black select-box bg-white border border-tertiary flex flex-col max-h-[300px] overflow-y-auto ${
                  pickUpTimeActive ? 'block' : 'hidden'
                }`}
              >
                {time.map((item, i) => (
                  <option
                    value={pickUpTime}
                    key={i}
                    className="hover:bg-primary hover:text-white px-4 py-4 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPickUpTimeActive(false);
                      setCarSelectActive(false);
                      setPickUpTime(item);
                    }}
                  >
                    {item}
                  </option>
                ))}
              </div>
            </div>
            {/* select pick up date */}
          </div>
          <div className="w-full sm:w-1/2 pl-2">
            <input
              type="date"
              id="pick_up_date"
              name="pick_up_date"
              className="w-full bg-transparent border-b border-white py-1.5"
              value={pickUpDate}
              onChange={(e) => {
                setPickUpTimeActive(false);
                setPickUpTimeActive(false);
                setPickUpDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="font-medium flex justify-center items-center gap-x-2 bg-gradient-to-br from-[#FF672F] to-[#F45B22] text-white py-4 px-12"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
