import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-blue-200">
                  Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p>Phone: +123 456 7890</p>
            <p>Email: support@watercent.com</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 sm:mt-0">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-white hover:text-blue-200" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-white hover:text-blue-200" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-white hover:text-blue-200" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-white hover:text-blue-200" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} WaterCent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
