import PropTypes from "prop-types";
import navLogo from "../../assets/logo.png";
import coinImg from "../../assets/coin.png";

const NavBar = ({ coinAdd }) => {
  return (
    <div className="backdrop-blur-md sticky top-0 z-20 text-black flex items-center justify-between mt-5 px-4 md:px-8">
      {/* Logo */}
      <img className="w-14 h-14" src={navLogo} alt="Logo" />

      {/* Navigation Links */}
      <div className="flex items-center gap-5 md:gap-10">
        <p className="opacity-70 cursor-pointer">Home</p>
        <p className="opacity-70 cursor-pointer">Fixture</p>
        <p className="opacity-70 cursor-pointer">Teams</p>
        <p className="opacity-70 cursor-pointer">Schedules</p>

        {/* Coin Button */}
        <button className="flex items-center gap-2 font-semibold border-2 p-2 px-4 rounded-xl hover:bg-gray-200 transition duration-300">
          {coinAdd} Coin
          <img className="w-6 h-6" src={coinImg} alt="Coin" />
        </button>
      </div>
    </div>
  );
};

// Define prop types for NavBar
NavBar.propTypes = {
  coinAdd: PropTypes.number.isRequired,
};

export default NavBar;
