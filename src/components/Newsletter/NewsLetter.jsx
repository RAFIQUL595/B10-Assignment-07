const NewsLetter = () => {
  return (
    <div className="">
      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-200 to-yellow-100 rounded-xl p-14 relative top-28 border-2">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="text-gray-800 mb-4 opacity-70">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md outline-none"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-yellow-500 text-black rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
