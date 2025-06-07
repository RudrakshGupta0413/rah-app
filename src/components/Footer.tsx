import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#7E6E61] text-[#fdfbf6] py-16 px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="mb-6 flex justify-center md:justify-start">
            <Image src="/Logo.png" alt="RAH Logo" width={100} height={40} />
          </div>
          <p className="text-lg leading-relaxed px-4 sm:px-0 text-center md:text-left">
            Handmade Arts from the Heart. Every piece we create is a reflection of love, culture, and craftsmanship. Thank you for supporting handmade &mdash; you&apos;re helping keep traditions alive.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/order-policy" className="hover:underline">Order Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}