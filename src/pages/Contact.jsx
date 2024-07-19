import Form from '../components/contact/Form';
import Social from '../components/contact/Social';

const Contact = () => {
  return (
    <div className="bg-secondary py-12 md:py-20 xl:py-32">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-[40px] mb-4">Let's Talk</h2>
        <p className="font-extralight text-gray-400 mb-8">
          If you'd like to talk about a potential project or just say hi, send
          me a message or email me at{' '}
          <span className="text-white font-medium">chinmoy201920@gmail.com</span>!
        </p>
        <Form />
        <Social center={true} marginTop={true} />
      </div>
    </div>
  );
};

export default Contact;
