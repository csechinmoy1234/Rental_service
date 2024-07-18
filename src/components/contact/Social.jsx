import { Link } from 'react-router-dom';
import { socialData } from '../../data';

const Social = ({ center, marginTop }) => {
  return (
    <div
      className={`flex gap-6 ${marginTop && 'mt-11'} ${
        center && 'justify-center'
      }`}
    >
      {socialData.map((item, i) => {
        return (
          <Link
            to={item.link}
            target="_blank"
            className={`hover:-translate-y-2 duration-300 opacity-75 `}
            key={i}
          >
            <span dangerouslySetInnerHTML={{ __html: item.icon }} />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
