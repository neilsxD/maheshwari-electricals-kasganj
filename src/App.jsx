import './index.css'

const place = 'Maheshwari Electricals, near Kotwali, Bilram Gate, Kasganj, Uttar Pradesh 207123'
const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`
const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place)}`
const products = [
  ['01', '⌁', 'Wires & cables', 'Wiring supplies for home, shop, and project needs.'],
  ['02', '▣', 'Switches & fittings', 'Everyday switches, sockets, and practical fittings.'],
  ['03', '✳', 'Lighting', 'Lighting products and accessories for your space.'],
  ['04', '⚡', 'Electrical essentials', 'Ask in store about switchgear and other supplies.'],
]

function App() {
  return <div className="site">
    <header><a className="brand" href="#top"><span className="mark">M</span><span>MAHESHWARI<small>ELECTRICALS</small></span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#products">Products</a><a href="#visit">Visit us</a></nav><a className="nav-cta" href={directions} target="_blank" rel="noreferrer">Get directions ↗</a></header>
    <main id="top">
      <section className="hero"><div className="hero-content"><div className="eyebrow"><i/> YOUR LOCAL ELECTRICAL STORE IN KASGANJ</div><h1>Powering<br/><em>everyday</em><br/>possibilities<span>.</span></h1><p>Electrical supplies for the projects that matter. Find Maheshwari Electricals at Bilram Gate, Kasganj.</p><div className="actions"><a className="btn" href="#products">Explore products <b>↗</b></a><a className="under" href={directions} target="_blank" rel="noreferrer">Find our store ↗</a></div><div className="hero-foot">— &nbsp; BILRAM GATE · KASGANJ · UTTAR PRADESH</div></div><div className="hero-art" role="img" aria-label="Illustration of a glowing light bulb"><div className="orbit one"/><div className="orbit two"/><div className="glow"/><div className="bulb"><div className="glass">⌁</div><div className="neck"/><div className="base"/></div><span className="spark">✳</span><div className="art-note">BRIGHT IDEAS<br/>START HERE ↗</div></div></section>
      <div className="ticker">WIRES & CABLES <b>✳</b> LIGHTING <b>✳</b> SWITCHES & FITTINGS <b>✳</b> ELECTRICAL ESSENTIALS <b>✳</b></div>
      <section className="about wrap" id="about"><div className="label">01 / ABOUT THE STORE</div><div><h2>Everything you need to<br/><em>keep things running.</em></h2><p>From a small home repair to a larger electrical job, the right supplies make all the difference. Maheshwari Electricals serves customers in Kasganj from its Bilram Gate location with a range of everyday electrical goods.</p><a className="under" href="#visit">Come visit us ↗</a></div></section>
      <section className="products wrap" id="products"><div className="section-head"><div><div className="label">02 / WHAT YOU'LL FIND</div><h2>Good projects start<br/>with <em>good supplies.</em></h2></div><p>Drop by the shop to ask about current products, availability, and the right fit for your needs.</p></div><div className="cards">{products.map(([n, icon, title, description]) => <article className="card" key={n}><div className="card-top">{n} / 04 <span>↗</span></div><div className="icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="banner"><div><div className="label">LOCAL. PRACTICAL. READY TO HELP.</div><h2>The right connection<br/>makes <em>all the difference.</em></h2><a className="btn gold" href={directions} target="_blank" rel="noreferrer">Plan your visit <b>↗</b></a></div><span className="big-bolt" aria-hidden="true">ϟ</span></section>
      <section className="visit wrap" id="visit"><div className="section-head"><div><div className="label">03 / FIND US</div><h2>Just around<br/><em>the corner.</em></h2></div><p>Visit Maheshwari Electricals in the Bilram Gate area of Kasganj. Check the map for the best route before you set out.</p></div><div className="visit-grid"><div className="address"><div className="label">OUR LOCATION</div><h3>Maheshwari<br/>Electricals</h3><address>Near Kotwali, Bilram Gate<br/>Kasganj, Uttar Pradesh 207123<br/>India</address><a className="btn" href={directions} target="_blank" rel="noreferrer">Get directions on Google Maps <b>↗</b></a><p className="fine">Please confirm the exact storefront pin before travelling.</p></div><div className="map"><iframe title="Map of Bilram Gate, Kasganj" src={`https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a href={map} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div></div></section>
    </main><footer><div className="footer-main"><div><div className="footer-brand">MAHESHWARI <span>⚡</span><br/>ELECTRICALS</div><p>Your local stop for electrical supplies in Kasganj.</p></div><a className="top" href="#top" aria-label="Back to top">↑</a></div><div className="footer-line"><span>© {new Date().getFullYear()} Maheshwari Electricals</span><span>Bilram Gate, Kasganj, UP 207123</span><a href={map} target="_blank" rel="noreferrer">Find us on Google Maps ↗</a></div></footer>
  </div>
}
export default App
