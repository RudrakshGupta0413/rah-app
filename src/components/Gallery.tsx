/* eslint-disable @next/next/no-img-element */
export default function Gallery() {
  return (
    <div className="bg-[#fdfbf6] min-h-screen w-full py-10 px-6 md:px-20 text-[#5b3926] font-serif">
      <h2 className="text-6xl font-bold text-center mb-2">Gallery</h2>
      <p className="text-center text-sm italic mb-10">
        A Glimpse Into Our Creations
      </p>

      <div className="bg-white border-2 border-[#4D312B] shadow-2xl rounded-2xl max-w-5xl mx-auto mb-10 px-6 py-6 text-center text-2xl leading-10">
        <p>
          From thread to line, from brush to frame, <br />
          Each piece we craft bears your name. <br />
          Emotions etched and stories sketched, <br />
          With every detail, love is etched. <br />
          Not just art, but a piece of heart, <br />
          Where every creation plays its part. <br />
          Handmade with care, from dreams to vows— <br />
          Crafted with soul at Ruchi Art House.
        </p>
      </div>

      {/* Standard 4-column Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Array.from({ length: 24 }).map((_, idx) => (
          <img
            key={idx}
            src={`/gallery/image${idx + 1}.png`}
            alt={`Gallery ${idx + 1}`}
            className="w-full aspect-square object-cover rounded-2xl shadow"
          />
        ))}
      </div>

      {/* Custom Grid Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Hand Craft row */}
        {Array.from({ length: 12 }).map((_, idx) => (
          <img
            key={`logo${idx}`}
            src={`/gallery/handcraft${idx + 1}.png`}
            alt={`Logo ${idx + 1}`}
            className="w-full aspect-square object-cover rounded-2xl shadow"
          />
        ))}

        {/* First row: 4 grayscale images */}
        {Array.from({ length: 4 }).map((_, idx) => (
          <img
            key={`gray${idx}`}
            src={`/gallery/gray${idx + 1}.png`}
            alt={`BW ${idx + 1}`}
            className="w-full aspect-square object-cover rounded-2xl shadow"
          />
        ))}

        {/* Painted cups row */}
        {Array.from({ length: 8 }).map((_, idx) => (
          <img
            key={`cups${idx}`}
            src={`/gallery/models${idx + 1}.png`}
            alt={`Cups ${idx + 1}`}
            className="w-full aspect-square object-cover rounded-2xl shadow"
          />
        ))}
        </div>

        {/* Final large dress images in varied layout */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[300px]">
          <img
            src="/gallery/final1.png"
            alt="Final 1"
            className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src="/gallery/final2.png"
            alt="Final 2"
            className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl shadow "
          />
          <img
            src="/gallery/final3.png"
            alt="Final 3"
            className="col-span-2 row-span-1 w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src="/gallery/final4.png"
            alt="Final 4"
            className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src="/gallery/final5.png"
            alt="Final 5"
            className="col-span-1 row-span-2 w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src="/gallery/final6.png"
            alt="Final 6"
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src="/gallery/final7.png"
            alt="Final 7"
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-2xl shadow"
          />
        </div>
      </div>
  );
}
