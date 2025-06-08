"use client";
import {
  CreditCard,
  Facebook,
  Instagram,
  MailIcon,
  MapIcon,
  PhoneCall,
  ShoppingCart,
} from "lucide-react";
import { useState }  from "react";

export default function OrderNow() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [altContact, setAltContact] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="bg-[#fdfbf6] min-h-screen py-10 px-4 sm:px-6 md:py-16 md:px-5 lg:py-20 lg:px-20 text-[#5b3926] font-serif">
      <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-sister text-[#5b3926] text-center mb-10 md:mb-12 lg:mb-16 font-love">
        Order Now
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-10 xl:gap-12 max-w-6xl lg:max-w-7xl xl:max-w-[100rem] mx-auto px-2 sm:px-4 md:px-0">
        {/* Left: Contact Info */}
        <div className="bg-white shadow-2xl rounded-xl py-8 px-5 md:px-3 lg:px-10 space-y-5 text-base sm:text-lg md:col-span-1 text-[#5C4D3F]">
          <h3 className="text-2xl sm:text-3xl font-light mb-6 md:pb-8 lg:pb-10">
            Contact Us
          </h3>
          <div className="flex flex-row items-start">
            <div>
              <MapIcon className="mt-1" />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium">Address</p>
              <p>
                Kalipur, Dharampura, Ward No.12
                <br />
                Jagdalpur, Chhattisgarh 494001
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start">
            <div>
              <PhoneCall className="mt-1" />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium">Phone</p>
              <p>(+91) 9635923636</p>
            </div>
          </div>

          <div className="flex flex-row items-start">
            <div>
              <MailIcon className="mt-1" />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium">Email</p>
              <p className="md:text-[15px]">ruchiarthouse10@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-row items-start">
            <div>
              <Instagram className="mt-1" />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium">Instagram</p>
              <p>__ruchi_art_house__</p>
            </div>
          </div>

          <div className="flex flex-row items-start">
            <div>
              <Facebook className="mt-1" />
            </div>
            <div className="px-3">
              <p className="mb-1 font-medium">Facebook</p>
              <p>@Ruchi Art House</p>
            </div>
          </div>

          <div className="flex flex-row items-start">
            <div>{/* <Pinterest /> */}</div>
            <div className="px-3">
              <p className="mb-1 font-medium">Pinterest</p>
              <p>@ruchiarthouse933</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white shadow-2xl rounded-xl px-6 py-8 sm:px-10 md:px-8 md:py-12 lg:px-16 lg:py-14 col-span-1 md:col-span-2 text-[#5C4D3F]">
          <h3 className="text-2xl sm:text-3xl font-light mb-4">
            Send Us a Message
          </h3>
          <p className="mb-6 text-base sm:text-lg text-[#7e6e61]">
            Looking for a unique gift for your loved ones? <br />
            Share your vision or a reference image of what you&apos;d like
            painted, sketched, stitched, or designed—we&apos;ll bring it to
            life!{" "}
            <div className="flex items-center mt-2">
              <ShoppingCart size={20} />
              <p className="px-3">
                All orders must be placed at least 15 days before the delivery
                date.
              </p>
            </div>
            <div className="flex items-center mt-2">
              <CreditCard size={20} />
              <p className="px-3">Prepaid orders only.</p>
            </div>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const messageData = `*New Order Request*\n
            *Name:* ${name}\n
            *Email:* ${email}\n
            *WhatsApp Contact:* ${contact}\n
            *Alternate Contact:* ${altContact}\n
            *Address:* ${address}\n
            *Message:* ${message}`;
              const whatsappNumber = "6260150731";
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                messageData
              )}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="space-y-4 pt-5 text-[#5b3926]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm font-medium text-[#7e6e61]">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                  className="w-full border text-sm sm:text-md border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm font-medium text-[#7e6e61]">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm font-medium text-[#7e6e61]">
                  Contact
                </label>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="text"
                  placeholder="Contact (Whatsapp)"
                  className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm font-medium text-[#7e6e61]">
                  Alternate Contact
                </label>
                <input
                  value={altContact}
                  onChange={(e) => setAltContact(e.target.value)}
                  type="text"
                  placeholder="Alternate Contact"
                  className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-[#7e6e61]">
                Full Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Full Address (With Pincode)"
                className="w-full border border-[#e7d5c2] bg-transparent rounded-md px-3 py-2 placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-[#7e6e61]">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message (Mention the product which you want to order)"
                className="w-full border border-[#e7d5c2] bg-[#E6D9CC]/20 rounded-md px-3 py-2 h-28 resize-none placeholder:text-[#A4907C] focus:outline-none focus:ring-2 focus:ring-[#cdb6a5]"
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