import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <footer className="bg-fk-dark-gray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo Section */}
          <Link href="/" className="flex items-center justify-center gap-3">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src="/fk-stickers-logo-white.png"
                alt="FK Stickers logo"
                width={180}
                height={38}
                priority
              />

            </div>
          </Link>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-fk-lila font-semibold mb-4 text-sm uppercase tracking-wide">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-fk-white hover:text-fk-lila transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-fk-white hover:text-fk-lila transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-fk-white hover:text-fk-lila transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="text-fk-lila font-semibold mb-4 text-sm uppercase tracking-wide">LEGAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-fk-white hover:text-fk-lila transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-fk-white hover:text-fk-lila transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-fk-white hover:text-fk-lila transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="md:col-span-1">
            <h3 className="text-fk-lila font-semibold mb-4 text-sm uppercase tracking-wide">PAYMENT METHODS</h3>
            <div className="grid grid-cols-2 gap-y-3">
              {/* VISA */}
              <div className="h-10 w-20 flex items-center justify-center">
                <Image
                  src="/visa.png"
                  alt="Visa logo"
                  height={24}
                  width={64}
                  priority
                />
              </div>

              {/* MercadoPago */}
              <div className="h-10 w-20 flex items-center justify-center">
                <Image
                  src="/mercado-pago.png"
                  alt="MercadoPago logo"
                  height={24}
                  width={86}
                  priority
                />
              </div>

              {/* MasterCard */}
              <div className="h-10 w-20 flex items-center justify-center h-8">
                <Image
                  src="/master-card.png"
                  alt="MasterCard logo"
                  height={24}
                  width={46}
                  priority
                />
              </div>
              
              {/* PayPal */}
              <div className="h-10 w-20 flex items-center justify-center h-8">
                <Image
                  src="/pay-pal.png"
                  alt="PayPal logo"
                  height={24}
                  width={74}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="md:col-span-1">
            <h3 className="text-fk-lila font-semibold mb-4 text-sm uppercase tracking-wide">CONTACT</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                    <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
                  </g>
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                    <path d="m2 6l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6" />
                    <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">Copyright © 2024 FK Stickers</p>
        </div>
      </div>
    </footer>
  )
}
