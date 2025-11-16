import Link from 'next/link'
import TagList from './TagList'
import ValueInput from './ValueInput'
import DiscountFilter from './DiscountFilter'

export default function ProductSidebar() {
  return (
    <aside className="h-fit text-fk-dark-gray shadow-lg rounded-xl border-1 border-gray-300 bg-gray-50 backdrop-blur-sm p-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm">
        <Link href="/" className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors">
          Home
        </Link>
        <span>{'>'}</span>
        <Link href="/stickers" className="text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors">
          Stickers
        </Link>
        <span>{'>'}</span>
        <span className="font-medium">Search</span>
      </nav>

      {/* Search */}
      <div className="mb-6">
        <h2 className="font-bold text-2xl mb-3">Searched word</h2>
      </div>

      {/* Related tags */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Related tags</h3>
        <TagList />
      </div>

      {/* Product cost range */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Product cost</h3>
        <ValueInput placeholder={"Cost"}/>
      </div>

      {/* Shipping cost range */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Shipping cost</h3>
        <ValueInput placeholder={`Shipping cost`}/>
      </div>

      {/* Discounts */}
      <div>
        <h3 className="font-bold text-lg mb-3">Discounts</h3>
        <DiscountFilter />
      </div>
    </aside>
  )
}
