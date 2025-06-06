export default function Stats() {
  return (
    <section className="bg-[#fdfbf6] pt-8 pb-16 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 pl-10">
        <div className="">
          <h3 className="text-8xl text-[#5b3926] font-love">350+</h3>
          <p className="text-4xl text-gray-800">Customer Favourites</p>
        </div>
        <div>
          <h3 className="text-8xl  text-[#5b3926] font-love">10+</h3>
          <p className="text-4xl text-gray-800">Quality Handmade Crafts</p>
        </div>
        <div>
          <h3 className="text-8xl text-[#5b3926] font-love">1K+</h3>
          <p className="text-4xl text-gray-800">Orders Completed</p>
        </div>
      </div>
    </section>
  );
}