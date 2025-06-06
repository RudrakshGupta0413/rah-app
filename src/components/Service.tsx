/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const services = [
  {
    title: "Faceless Canvas Illustration",
    image: "/Serv1.png",
    link: "/services/faceless-canvas",
  },
  {
    title: "Handmade Sketch Portrait",
    image: "/Serv2.png",
    link: "/services/sketch-portrait",
  },
  {
    title: "Handmade Embroidery Hoop",
    image: "/Serv3.png",
    link: "/services/embroidery-hoop",
  },
  {
    title: "Embroidery On Clothes",
    image: "/Serv4.png",
    link: "/services/clothes-embroidery",
  },
  {
    title: "Others",
    image: "/Serv5.png",
    link: "/services/others",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#fdfbf6] py-12 px-4 md:px-20">
      <h2 className="text-6xl font-bold font-love text-center text-[#5b3926] mb-10">Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="bg-[#fdfbf6]rounded-xl overflow-hidden">
            <div className="relative w-full h-[700px] rounded-2xl overflow-hidden shadow-[8px_8px_10px_rgba(0,0,0,0.2)]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[700px] object-cover object-top rounded-2xl"
              />
              <div className="absolute top-20 left-0 bg-white/70 px-12 py-10 ">
                <h3 className="text-2xl font-semibold italic text-gray-700 text-center">
                  {service.title}
                </h3>
              </div>
            </div>
            <div className="flex py-5">
              <Link href={service.link}>
                <button className="px-4 py-2 border border-[#4d312b] text-2xl text-[#4b4b4b] hover:bg-gray-100 hover:cursor-pointer transition rounded-2xl">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Services;
