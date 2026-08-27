"use client";
import { useCart } from './CartContext';
import Link from 'next/link';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="nav">
      <div className="wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C9 6 6 9.5 6 13.5C6 17.6 8.7 21 12 21C15.3 21 18 17.6 18 13.5C18 9.5 15 6 12 2Z" fill="#F2B72A"/></svg>
          </span>
          <span>Sri Raksha<small>Oil Mill</small></span>
        </Link>
        <div className="nav-links">
          <Link href="/#products">Oils</Link>
          <Link href="/#process">Why Wood‑Pressed</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#visit">Visit</Link>
          <button 
            className="btn ghost" 
            onClick={() => setIsCartOpen(true)}
            style={{ display: 'flex', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}
