import Link from "next/link";

export function FooterSection() {
    return (
      <footer className="bg-white dark:bg-gray-900 dark:border-t dark:border-gray-700 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Company</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-now"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Services</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Local Car Rental
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Airport Taxi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Outstation Taxi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    One-Way Booking
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Corporate Car Rental
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Luggage Transfer
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Booking */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Booking</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/booking"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Make a Booking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking/status"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Booking Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking/history"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Booking History
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Support</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  