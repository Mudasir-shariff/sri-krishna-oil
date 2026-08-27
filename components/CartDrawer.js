"use client";
import { useCart } from './CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQty, removeFromCart, cartTotal } = useCart();
  const router = useRouter();

  if (!isCartOpen) return null;

  return (
    <>
      <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)} />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              Your cart is currently empty.
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.variant}`}>
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-variant">{item.variant}</div>
                  <div className="cart-item-price">₹{item.price}</div>
                  <div className="cart-item-actions">
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.variant, item.qty - 1)}>-</button>
                    <span style={{fontFamily: 'var(--mono)', fontSize: '13px'}}>{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.variant, item.qty + 1)}>+</button>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id, item.variant)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <button 
              className="btn gold checkout-btn" 
              onClick={() => {
                setIsCartOpen(false);
                router.push('/checkout');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
