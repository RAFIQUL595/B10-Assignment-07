import footerLogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-black pt-40 z-10">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-16">
        <img src={footerLogo} alt="" />
      </div>
      <div className="grid grid-cols-3 w-4/6 mx-auto justify-items-center">
        <div className="space-y-4">
          <h3 className="font-bold text-white">About Us</h3>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-white">Quick Links</h3>
          <ul className="text-gray-400 list-disc ml-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-white">Subscribe</h3>
          <p className="text-gray-400 mb-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-yellow-500 text-black rounded-md hover:bg-pink-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 pb-5">
        &copy;2024 Your Company All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
