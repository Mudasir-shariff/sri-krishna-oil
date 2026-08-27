import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import CartDrawer from '../components/CartDrawer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <CartDrawer />

      <header className="hero" id="top">
        <div className="wrap">
          <div className="hero-copy">
            <div className="eyebrow">Est. Electronic City, Bengaluru</div>
            <h1>The secret of your family&apos;s <em>wellness</em></h1>
            <p className="lede">Groundnut, coconut, gingelly, sunflower and safflower oil — pressed slowly in a wooden chekku, the way it was always meant to be done. No heat, no solvents, no shortcuts.</p>
            <div className="hero-ctas">
              <a className="btn gold" href="tel:+919886631514">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                98866 31514
              </a>
              <a className="btn ghost" href="https://maps.google.com/maps?vet=10CAAQoqAOahgKEwjQjNHq4buWAxUAAAAAHQAAAAAQwAE..i&cs=1&hl=en-IN&rlz=1C1ONGR_enIN1112IN1112&sca_esv=2a198a1a37cb003b&udm=local&pvq=Cg0vZy8xMXFoMndtcmYzIg4KCE9pbCBtaWxsEAIYAw&lqi=ChVPaWwgbWlsbCBpbiBrYXJuYXRha2FIo7vnrby2gIAIWiEQABABGAAYARgDIhVvaWwgbWlsbCBpbiBrYXJuYXRha2GSAQVzdG9yZQ&fvr=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bae6bbcaf7d078f:0x8f3e64f09c198686" target="_blank" rel="noopener noreferrer">Get Directions</a>
            </div>
            <div className="hero-facts">
              <div className="hero-fact"><b>4.9 ★</b><span>70 Google Reviews</span></div>
              <div className="hero-fact"><b>5</b><span>Oils Pressed In-House</span></div>
              <div className="hero-fact"><b>FSSAI</b><span>Licensed Facility</span></div>
            </div>
          </div>

          <div className="press-stage" aria-hidden="true">
            <svg viewBox="0 0 520 520">
              <circle cx="260" cy="260" r="230" fill="none" stroke="#12352A" strokeOpacity="0.08" strokeWidth="1"/>
              <g id="wheelGroup">
                <circle cx="260" cy="260" r="150" fill="none" stroke="#6E4426" strokeWidth="14"/>
                <circle cx="260" cy="260" r="150" fill="none" stroke="#4A2E1A" strokeWidth="2"/>
                <g stroke="#6E4426" strokeWidth="10" strokeLinecap="round">
                  <line x1="260" y1="260" x2="260" y2="118" />
                  <line x1="260" y1="260" x2="368" y2="192" />
                  <line x1="260" y1="260" x2="368" y2="328" />
                  <line x1="260" y1="260" x2="260" y2="402" />
                  <line x1="260" y1="260" x2="152" y2="328" />
                  <line x1="260" y1="260" x2="152" y2="192" />
                </g>
                <line x1="260" y1="260" x2="470" y2="230" stroke="#4A2E1A" strokeWidth="12" strokeLinecap="round"/>
                <circle cx="260" cy="260" r="26" fill="#4A2E1A"/>
                <circle cx="260" cy="260" r="10" fill="#F2B72A"/>
              </g>
              <circle cx="260" cy="260" r="150" fill="none" stroke="#12352A" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="1 9"/>
            </svg>
            <div className="drop"></div>
            <div className="drop"></div>
          </div>
        </div>
      </header>

      <div className="trust">
        <div className="wrap">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.4 6.5L21 9l-5.2 4.4L17.4 21 12 17.3 6.6 21l1.6-7.6L3 9l6.6-.5L12 2z"/></svg>
            Pure virgin, unrefined oil
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            Cold, low-heat wood extraction
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
            FSSAI licensed mill
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            No preservatives, ever
          </div>
        </div>
      </div>

      <section className="process" id="process">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Our Method</div>
            <h2>Pressed slowly, on purpose.</h2>
            <p>A wooden chekku turns at a fraction of the speed of a steel expeller. Less friction means less heat — and less heat means the oil keeps its natural aroma, colour and nutrients intact.</p>
          </div>
          <div className="process-grid">
            <div className="process-item">
              <div className="num">01 — Seed</div>
              <h3>Sourced whole</h3>
              <p>Groundnut, copra, sesame, sunflower and safflower seed selected for oil content, cleaned before pressing.</p>
            </div>
            <div className="process-item">
              <div className="num">02 — Press</div>
              <h3>Wooden ghani</h3>
              <p>Slow-turning wood mortar and pestle crush the seed gradually, keeping the batch well below refining temperatures.</p>
            </div>
            <div className="process-item">
              <div className="num">03 — Settle</div>
              <h3>Naturally filtered</h3>
              <p>Oil is left to settle and gravity-filtered — no chemical solvents, no bleaching, no deodorising.</p>
            </div>
            <div className="process-item">
              <div className="num">04 — Bottle</div>
              <h3>Sealed fresh</h3>
              <p>Bottled to order in 1L and 500ml sizes at our Electronic City mill, so what you buy is what was just pressed.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      <section className="gallery">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">From The Mill</div>
            <h2>What leaves our counter.</h2>
            <p>Freshly pressed and bottled at #1194, 1st Cross, Neeladri Investment Layout — every bottle labelled and sealed on site.</p>
          </div>
          <div className="bottle-strip">
            <div className="bottle-frame bf-tall">
              <Image src="/images/groundnut-oil.png" alt="Sri Raksha wood pressed groundnut oil" width={600} height={800} />
              <div className="cap">Groundnut Oil — 1L &amp; 500ml</div>
            </div>
            <div className="bottle-frame bf-mid">
              <Image src="/images/coconut-oil.png" alt="Sri Raksha wood pressed coconut oil" width={600} height={800} />
              <div className="cap">Coconut Oil — 1L &amp; 500ml</div>
            </div>
            <div className="bottle-frame bf-store">
              <Image src="/images/storefront.png" alt="Sri Raksha Oil Mill storefront" width={600} height={750} />
              <div className="cap">Our Counter — E‑City Phase 1</div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="wrap">
          <div className="reviews-head">
            <div>
              <div className="eyebrow">Word Of Mouth</div>
              <h2 style={{marginTop:'14px', fontSize: 'clamp(28px,3.6vw,38px)', color:'var(--forest-deep)'}}>What the neighbourhood says</h2>
            </div>
            <div className="rating-badge">
              <span className="num">4.9</span>
              <div>
                <span className="stars">★★★★★</span>
                <div className="meta">70 GOOGLE REVIEWS</div>
              </div>
            </div>
          </div>
          <div className="review-grid">
            <div className="review-card">
              <span className="stars">★★★★★</span>
              <p>&quot;Best place to get healthy cooking oils, trust worthy.&quot;</p>
              <div className="who">Google Review</div>
            </div>
            <div className="review-card">
              <span className="stars">★★★★★</span>
              <p>&quot;Best quality and trustworthy cold pressed oil. The owner is a humble person.&quot;</p>
              <div className="who">Google Review</div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Visit The Mill</div>
            <h2>Come watch it press.</h2>
          </div>
          <div className="visit-grid">
            <div>
              <div className="info-row">
                <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div>
                  <h4>Address</h4>
                  <p>#1194, 1st Cross, Neeladri Investment Layout,<br/>Doddathoguru, E‑City Phase 1, Bengaluru – 560100</p>
                </div>
              </div>
              <div className="info-row">
                <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+919886631514">98866 31514</a> &nbsp;/&nbsp; <a href="tel:+919353368830">93533 68830</a></p>
                </div>
              </div>
              <div className="info-row">
                <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:srirakshaoil@gmail.com">srirakshaoil@gmail.com</a></p>
                </div>
              </div>
              <div className="info-row">
                <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
                <div>
                  <h4>Hours</h4>
                  <p>Open daily, morning &amp; evening shifts — closes 9 pm.<br/>Call ahead to confirm exact timing.</p>
                </div>
              </div>
            </div>

            <div className="map-frame">
              <div className="shot">
                <Image src="/images/storefront.png" alt="Sri Raksha Oil Mill signage and shop entrance" fill style={{objectFit: 'cover'}} />
              </div>
              <div className="foot">
                <div className="g">
                  <span className="stars" style={{fontSize:'14px'}}>★★★★★</span>
                  4.9 · 70 reviews on Google
                </div>
                <a className="btn ghost" style={{padding:'8px 16px', fontSize:'13px'}} href="https://maps.google.com/maps?vet=10CAAQoqAOahgKEwjQjNHq4buWAxUAAAAAHQAAAAAQwAE..i&cs=1&hl=en-IN&rlz=1C1ONGR_enIN1112IN1112&sca_esv=2a198a1a37cb003b&udm=local&pvq=Cg0vZy8xMXFoMndtcmYzIg4KCE9pbCBtaWxsEAIYAw&lqi=ChVPaWwgbWlsbCBpbiBrYXJuYXRha2FIo7vnrby2gIAIWiEQABABGAAYARgDIhVvaWwgbWlsbCBpbiBrYXJuYXRha2GSAQVzdG9yZQ&fvr=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bae6bbcaf7d078f:0x8f3e64f09c198686" target="_blank" rel="noopener noreferrer">Open in Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <a href="#top" className="brand">
              <span className="brand-mark">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C9 6 6 9.5 6 13.5C6 17.6 8.7 21 12 21C15.3 21 18 17.6 18 13.5C18 9.5 15 6 12 2Z" fill="#F2B72A"/></svg>
              </span>
              <span>Sri Raksha<small>Pure Virgin Natural Oil</small></span>
            </a>
            <div className="footer-products">
              <span>Groundnut</span><span>Coconut</span><span>Gingelly</span><span>Sunflower</span><span>Safflower</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Sri Raksha Oil Mill, Electronic City, Bengaluru.</span>
            <span>FSSAI Licensed Facility</span>
          </div>
        </div>
      </footer>
    </>
  );
}
