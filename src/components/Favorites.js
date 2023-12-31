import ProductData from '../api/products.json'
import { useState, useEffect } from 'react'
import ProductItem from './ui/ProductItem';
export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData);

  }, [])
  return (
    <div>
      <h3 className="text-sm font-semibold my-3">Favoriler</h3>
      <div className='grid grid-cols-8 gap-0.1  rounded-lg overflow-hidden'>
        {products && products.map((product, index) => <ProductItem key={index} product={product} />)}
      </div>

    </div>
  )
}
