import ProductGrid from './components/ProductGrid'
import ProductSidebar from './components/ProductSidebar'

export default function FeaturesPage() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-42">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          <ProductSidebar />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}