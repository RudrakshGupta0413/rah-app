import {
  CreditCard,
  Facebook,
  Instagram,
  MailIcon,
  MapIcon,
  PhoneCall,
  ShoppingCart,
} from "lucide-react";

export default function OrderNow() {
  return (
    <section className="bg-[#fdfbf6] min-h-screen py-20 px-6 md:px-20 text-[#5b3926] font-serif">
      <h2 className="text-6xl font-bold text-[#5b3926]  text-center mb-16 font-love">
        Order Now
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-16">
        {/* Left: Contact Info */}
        <div className="bg-white shadow-2xl rounded-xl py-10 pl-5 space-y-6 text-lg col-span-1 mx-4 text-[#5C4D3F]">
          <h3 className="text-3xl font-light mb-4 pb-10">Contact Us</h3>
          <div className="flex flex-row">
            <div>
              <MapIcon />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium"> Address</p>
              <p>
                Kadipur, Dharampura, Ward No.12
                <br />
                Janjgir, Chhattisgarh 495001
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <PhoneCall />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium">Phone</p>
              <p>(+91) 9635923636</p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <MailIcon />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium"> Email</p>
              <p>ruchiarthouse10@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Instagram />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium"> Instagram</p>
              <p>__ruchi_art_house__</p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Facebook />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium"> Facebook</p>
              <p>@Ruchi Art House</p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>{/* <Pinterest /> */}</div>
            <div className="px-3">
              <p className="mb-1 font-medium"> Pinterest</p>
              <p>@ruchiarthouse933</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white shadow-2xl rounded-xl px-16 py-14 col-span-1 md:col-span-2 mx-14 text-[#5C4D3F]">
          <h3 className="text-3xl font-light mb-4">Send Us a Message</h3>
          <p className="mb-4 text-xl text-[#7e6e61]">
            Looking for a unique gift for your loved ones? <br />
            Share your vision or a reference image of what you&apos;d like
            painted, sketched, stitched, or designed—we&apos;ll bring it to
            life!{" "}
            <div className="flex">
              <ShoppingCart />
              <p className="px-3">
                All orders must be placed at least 15 days before the delivery
                date.
              </p>
            </div>
            <div className="flex">
              <CreditCard />
              <p className="px-3">Prepaid orders only.</p>
            </div>
          </p>

          <form className="space-y-4 pt-5 text-[#5b3926]">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 text-md font-medium text-[#7e6e61]">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border text-md border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-md font-medium text-[#7e6e61]">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1 text-md font-medium text-[#7e6e61]">
                  Contact
                </label>
                <input
                  type="text"
                  placeholder="Contact (Whatsapp)"
                  className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-md font-medium text-[#7e6e61]">
                  Alternate Contact
                </label>
                <input
                  type="text"
                  placeholder="Alternate Contact"
                  className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-md font-medium text-[#7e6e61]">
                Full Address
              </label>
              <input
                type="text"
                placeholder="Full Address (With Pincode)"
                className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
              />
            </div>

            <div>
              <label className="block mb-1 text-md font-medium text-[#7e6e61]">Message</label>
              <textarea
                placeholder="Your message (Mention the product which you want to order)"
                className="w-full border border-[#e7d5c2]  bg-[#E6D9CC]/20 rounded-md px-3 py-2 h-28 resize-none placeholder:text-[#A4907C] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7e6e61] text-white py-2 rounded hover:bg-[#6d5c4e] transition hover:cursor-pointer"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
