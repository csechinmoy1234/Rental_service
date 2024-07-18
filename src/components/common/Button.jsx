/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return (
    <button className="flex items-center gap-x-2 bg-gradient-to-br from-[#FF672F] to-[#F45B22] text-white py-4 px-12">
      {children}
    </button>
  );
};

export default Button;
