import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="py-12 md:py-20 bg-tertiary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h5 className="uppercase mb-6 text-2xl">{`Feel Free to connect`}</h5>
          <div className="flex items-center gap-x-6">
            <Link
              to="https://www.facebook.com/chinmoy.dutt.5/"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/duttachinmoy17/"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              to="https://github.com/csechinmoy1234"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaGithub size={20} />
            </Link>
          </div>
          <h5 className="opacity-75 mt-8">{`Copyright ©2024 All rights reserved | This template is made with 🤍 by Chinmoy`}</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
