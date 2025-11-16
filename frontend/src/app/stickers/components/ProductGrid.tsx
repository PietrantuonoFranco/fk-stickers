import Sticker from '@/app/components/Sticker'
import products from '../../../mock/products.json'


export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Sticker key={product.id} product={product} />
      ))}
    </div>
  )
}
