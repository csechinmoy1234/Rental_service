import Cars from '../components/home/Cars';
import Hero from '../components/home/Hero';
import Process from '../components/home/Process';
import RequireCar from '../components/home/RequireCar';
import Services from '../components/home/Services';
import Testimonial from '../components/home/Testimonial';

const Home = () => {
  return (
    <>
      <Hero />
      <RequireCar />
      <Process />
      <Cars />
      <Services />
      <Testimonial />
    </>
  );
};

export default Home;
