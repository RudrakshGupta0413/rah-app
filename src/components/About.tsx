/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <section id="about" className="bg-[#fdfbf6] py-16 px-6 md:px-20">
      <h2 className="text-6xl font-bold text-center text-[#5b3926] mb-8 font-serif">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 px-4 sm:px-10">
        {/* Founder Image and Name */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3 lg:w-1/4 flex-shrink-0">
          <div className="h-40 w-40 sm:w-52 sm:h-52 p-2 rounded-lg bg-white flex items-center justify-center shadow-lg">
            <img
              src="/Founder.png" // Ensure this path is correct
              alt="Founder"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
          <p className="font-semibold text-xl mt-2 text-[#5b3926]">
            Ruchika{" "}
            <span className="text-gray-600 text-sm font-normal block">
              (Founder)
            </span>
          </p>
        </div>

        {/* About Us Description */}
        <div className="text-gray-700 text-sm flex-1 text-center md:text-left">
          <p className="text-2xl font-normal text-[#7e6e61] pb-14">
            Founded in 2019 by Ruchika, Ruchi Art House celebrates the charm of
            handmade gifts through embroidery, sketches, and illustrations. What
            began as a personal journey has become a space where every piece
            tells a story. Each creation is crafted with love, adding warmth and
            a personal touch to everyday moments, making celebrations and
            memories even more special and heartfelt. From custom portraits to
            detailed artwork, we turn emotions into timeless keepsakes.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 sm:px-10">
        <img
          src="/About1.png"
          alt="Art 1"
          className="rounded-lg object-cover w-full h-auto"
        />
        <img
          src="/About2.png"
          alt="Art 2"
          className="rounded-lg object-cover w-full h-auto"
        />
        <img
          src="/About3.png"
          alt="Art 3"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </section>
  );
};

export default About;
