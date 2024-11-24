import PropTypes from "prop-types";
import bgShadow from "../../assets/bg-shadow.png";
import cricketLogo from "../../assets/banner-main.png";

const Banner = ({ handelCoinButton }) => {
  return (
    <div className="relative flex items-center justify-center bg-black rounded-xl mt-5 shadow-md overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full md:object-cover opacity-50"
        src={bgShadow}
        alt="Background Shadow"
      />

      <div className="relative text-center text-white p-8">
        {/* Cricket Logo */}
        <img src={cricketLogo} alt="Cricket Logo" className="mx-auto mb-4" />

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-6 opacity-70">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Call to Action Button */}
        <button
          onClick={() => handelCoinButton(6000000)}
          className="bg-[#E7FE29] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#bccf0d] transition duration-300"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

// Prop type validation
Banner.propTypes = {
  handelCoinButton: PropTypes.func.isRequired,
};

export default Banner;
