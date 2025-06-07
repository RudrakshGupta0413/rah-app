export default function Stats() {
  return (
    <section className="bg-[#fdfbf6] py-12 px-4 sm:px-6 md:py-16 lg:px-8"> {/* Adjusted padding */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 sm:gap-x-8 text-center"> {/* Adjusted grid and added text-center */}
        {/* Stat Item 1 */}
        <div className="flex flex-col items-center"> {/* Added flex and items-center for vertical centering */}
          <h3 className="text-6xl sm:text-7xl lg:text-8xl text-[#5b3926] font-love">350+</h3> {/* Responsive text size */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mt-2">Customer Favourites</p> {/* Responsive text size and margin-top */}
        </div>

        {/* Stat Item 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-6xl sm:text-7xl lg:text-8xl text-[#5b3926] font-love">10+</h3>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mt-2">Quality Handmade Crafts</p>
        </div>

        {/* Stat Item 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-6xl sm:text-7xl lg:text-8xl text-[#5b3926] font-love">1K+</h3>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mt-2">Orders Completed</p>
        </div>
      </div>
    </section>
  );
}