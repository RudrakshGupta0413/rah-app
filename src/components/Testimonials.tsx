/* eslint-disable @next/next/no-img-element */

const testimonials = [
  {
    text: "I couldn't find a better option than this to make my best friend special. I am so lucky to have an artist like you... whenever I want anything more, I will contact you.",
    name: "Pooja Koram",
    img: "/Test1.png",
  },
  {
    text: "Bahut pyaare lage badges... And the painting is very beautiful. Jinke liye tha, he also loved it.",
    name: "Culture Devi",
    img: "/Test2.png",
  },
  {
    text: "The embroidery and the design is sooo good, everyone loved it and appreciated the artwork. Thank you so much for the work.",
    name: "Go Vallabh",
    img: "/",
  },
  {
    text: "Hiii RAH he literally cried when he saw me and infact loved your art work. I'm definitely looking forward to ask you to make more such beautiful art pieces for me and my loved ones. I'm honestly thankful that I'm acquaintance with such a humble hearted human..",
    name: "Simran Singh",
    img: "/Test3.png",
  },
  {
    text: "Like always I'm happy ordering you.. my customised pics to be handmade.. very happy with the portraits u made this time as well.. U really are very talented and I appreciate ur hardwork..God bless keep growing and I will keep ordering..",
    name: "Taniya",
    img: "/Test4.png",
  },
  {
    text: "The illustration was good that my sister cried after getting it.. and she always carry that coaster with her everywhere..",
    name: "Kanha",
    img: "/",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fdfbf6] py-16 px-4 md:px-20">
      <h2 className="text-7xl font-sister text-center text-[#5b3926] mb-12 font-love text-shadow-sm">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-10">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl py-12 px-12 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] border border-[#48312b]"
          >
            {item.img && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-2 border-[#48312b] shadow">
                {item.img && item.img !== "/" ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
            )}
            <div className="mt-12 mb-4">
              <p className="text-xl text-gray-800 font-medium">{item.text}</p>
            </div>
            <p className="text-right text-xl font-semibold text-[#5b3926] mt-auto">
              -{item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
