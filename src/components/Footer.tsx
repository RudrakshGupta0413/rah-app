import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#7E6E61] text-[#fdfbf6] md:px-20 pt-20 pb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Left Section */}
        <div className='px-10'>
          <div className="mb-4">
            <Image src="/Logo.png" alt="RAH Logo" width={100} height={40} />
          </div>
          <p className="text-xl leading-relaxed justify-center text-justify ">
            Handmade Arts from the Heart<br />
            Every piece we create is a reflection of love, culture and craftsmanship.<br />
            Thank you for supporting handmade - you&apos;re helping keep traditions alive.
          </p>
        </div>

        {/* Quick Links */}
        <div className='px-30'>
          <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-3 text-xl pt-4">
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><Link href="/order-policy" className="hover:underline">Order Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='px-10'>
          <h3 className="text-2xl font-semibold mb-3">Social Media</h3>
          <ul className="space-y-2 text-xl pt-4">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
