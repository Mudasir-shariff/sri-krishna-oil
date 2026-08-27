"use client";
import { useState } from 'react';
import { useCart } from './CartContext';

const products = [
  {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    description: 'Rich, nutty and full-bodied — our most traditional press, ideal for everyday tempering and deep frying.',
    color: '#F2B72A',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#12352A" strokeWidth="1.6"><ellipse cx="12" cy="8" rx="5" ry="6"/><ellipse cx="12" cy="17" rx="5" ry="6"/></svg>,
    variants: [
      { id: '1L', price: 280 },
      { id: '500ml', price: 150 }
    ]
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    description: 'Pressed fresh from copra, light and fragrant — for cooking, hair care and traditional home remedies.',
    color: '#EDE6D2',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#12352A" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>,
    variants: [
      { id: '1L', price: 320 },
      { id: '500ml', price: 170 }
    ]
  },
  {
    id: 'gingelly-oil',
    name: 'Gingelly Oil',
    description: 'Cold-pressed sesame oil with a deep, roasted aroma — a staple for South Indian cooking and oil baths.',
    color: '#BE5B22',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#FBF3E1" strokeWidth="1.6"><circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="14" r="2"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>,
    variants: [
      { id: '1L', price: 450 },
      { id: '500ml', price: 230 }
    ]
  },
  {
    id: 'sunflower-oil',
    name: 'Sunflower Oil',
    description: 'Light, mild and versatile — a lighter everyday oil that suits most home cooking without overpowering flavour.',
    color: '#F2B72A',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#12352A" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
    variants: [
      { id: '1L', price: 220 },
      { id: '500ml', price: 120 }
    ]
  },
  {
    id: 'safflower-oil',
    name: 'Safflower Oil',
    description: 'A lighter, neutral-tasting oil, well suited for those keeping an eye on richer, heavier oils in daily meals.',
    color: '#D7A93A',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#12352A" strokeWidth="1.6"><path d="M12 3l2 5 5 .5-3.8 3.5 1 5-4.2-2.6L7.8 17l1-5L5 7.5l5-.5 2-4z"/></svg>,
    variants: [
      { id: '1L', price: 350 },
      { id: '500ml', price: 180 }
    ]
  }
];

function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  return (
    <div className="oil-card">
      <div className="oil-swatch" style={{ background: product.color }}>
        {product.icon}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      <div className="product-actions">
        <div className="product-price">₹{selectedVariant.price}</div>
        
        <select 
          className="product-variant" 
          value={selectedVariant.id} 
          onChange={(e) => setSelectedVariant(product.variants.find(v => v.id === e.target.value))}
        >
          {product.variants.map(v => (
            <option key={v.id} value={v.id}>{v.id}</option>
          ))}
        </select>

        <button 
          className="btn" 
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => addToCart({ id: product.id, name: product.name }, selectedVariant.id, selectedVariant.price)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The Range</div>
          <h2>Five oils, one press.</h2>
          <p>Every bottle carries the same promise — wood pressed, unrefined, and free of additives.</p>
        </div>

        <div className="products-grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
