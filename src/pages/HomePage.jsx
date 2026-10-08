import { Link } from 'react-router-dom'

const highlights = [
  { icon: '✨', title: 'Poké Glow Facial', text: 'Brightening rituals with berry extracts.' },
  { icon: '💅', title: 'Charm Nails', text: 'Soft pastel manicures inspired by Eevee.' },
  { icon: '🎀', title: 'Aura Styling', text: 'Signature looks for every trainer’s vibe.' },
  { icon: '🌸', title: 'Calm Spa', text: 'Relaxing body care for post-battle recovery.' },
]

const services = [
  {
    name: 'Pikachu Pop Glow',
    price: '$58',
    description: 'Vitamin C peel, brightening mask, and electric shimmer finish.',
    badge: 'Best seller',
  },
  {
    name: 'Bulbasaur Bloom',
    price: '$72',
    description: 'Botanical facial with herbal steam and hydration infusion.',
    badge: 'Fresh skin',
  },
  {
    name: 'Sylveon Silk Hair',
    price: '$89',
    description: 'Luxury smoothing treatment with glossy, featherlight curls.',
    badge: 'Gloss boost',
  },
  {
    name: 'Charmander Flame Mani',
    price: '$42',
    description: 'Warm-toned gel polish and hand massage with a bold finish.',
    badge: 'Hot trend',
  },
]

const pokemonTeam = [
  { name: 'Pikachu', emoji: '⚡', mood: 'Electric energy' },
  { name: 'Bulbasaur', emoji: '🌿', mood: 'Fresh glow' },
  { name: 'Jigglypuff', emoji: '🎵', mood: 'Soft charm' },
  { name: 'Sylveon', emoji: '💖', mood: 'Velvet shine' },
]

const packages = [
  {
    name: 'Starter Trainer',
    price: '$99',
    features: ['Mini facial', 'Nail styling', 'Express makeup'],
  },
  {
    name: 'Elite Beauty Pass',
    price: '$179',
    features: ['Full salon ritual', 'Hair polish', 'Spa recovery'],
    featured: true,
  },
  {
    name: 'Royal League',
    price: '$249',
    features: ['VIP styling session', 'Luxury skincare', 'Exclusive accessory kit'],
  },
]

const testimonials = [
  {
    quote: 'My look felt like I stepped into a Pokémon anime scene. The glow was unreal!',
    author: 'Mia, trainer',
  },
  {
    quote: 'The salon combines luxury care and playful energy. My hair looked shiny all week.',
    author: 'Leo, collector',
  },
  {
    quote: 'The team really understands how to make every detail feel magical and personal.',
    author: 'Ava, coordinator',
  },
]

function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">⚡</span>
          <span>PokeGlow Salon</span>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#collections">Collections</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
          <Link to="/ai-lab">AI Lab</Link>
        </nav>

        <Link to="/booking" className="primary-btn nav-cta">
          Book a session
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Pokémon-inspired beauty studio</p>
            <h1>Glow like your favorite trainer.</h1>
            <p className="hero-text">
              High-end beauty care, playful color stories, and luxury self-care inspired by
              the vibrant charm of the Pokémon world.
            </p>

            <div className="actions">
              <Link to="/booking" className="primary-btn">
                Reserve your makeover
              </Link>
              <a href="#services" className="secondary-btn">
                Explore treatments
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>4.9/5</strong>
                <span>trainer rating</span>
              </div>
              <div>
                <strong>2.4k</strong>
                <span>makeovers</span>
              </div>
              <div>
                <strong>12+</strong>
                <span>signature looks</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Beauty salon mood board">
            <div className="visual-card main-card">
              <div className="mini-label">Signature glow</div>
              <div className="pokemon-figure">✨</div>
              <h3>Pikachu shine edit</h3>
              <p>Soft brilliance + sparkle finish</p>
            </div>

            <div className="floating-badge badge-one">
              <span>🌸</span>
              <div>
                <strong>Fresh aura</strong>
                <small>Hydrating care</small>
              </div>
            </div>

            <div className="floating-badge badge-two">
              <span>💖</span>
              <div>
                <strong>Velvet tone</strong>
                <small>Soft pink finish</small>
              </div>
            </div>
          </div>
        </section>

        <section className="highlight-strip">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-item">
              <span>{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="ai-showcase">
          <div className="ai-showcase-copy">
            <p className="eyebrow">AI Beauty Concierge</p>
            <h2>Smart recommendations backed by a RAG-powered salon knowledge engine.</h2>
            <p>
              We combine your service library, product notes, client preferences, and beauty trends into
              an intelligent assistant that helps trainers recommend the perfect ritual in seconds.
            </p>
            <Link to="/ai-lab" className="primary-btn">
              Explore AI Lab
            </Link>
          </div>

          <div className="ai-pipeline-mini">
            <div className="mini-step"><span>01</span> Ingest</div>
            <div className="mini-step"><span>02</span> Embed</div>
            <div className="mini-step"><span>03</span> Retrieve</div>
            <div className="mini-step"><span>04</span> Answer</div>
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Popular services</p>
            <h2>Salon rituals for every trainer.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.name} className="service-card">
                <div className="card-top">
                  <span className="badge">{service.badge}</span>
                  <span className="price">{service.price}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to="/booking" className="link-btn">
                  Book now
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="collections" className="feature-banner">
          <div className="feature-copy">
            <p className="eyebrow">Beauty collections</p>
            <h2>Choose your mood, match your aura.</h2>
            <p>
              From bright sparkle edits to cozy soft glam, every look is tailored to your
              personality and your Pokémon-inspired energy.
            </p>
          </div>

          <div className="pokemon-row">
            {pokemonTeam.map((pokemon) => (
              <div key={pokemon.name} className="pokemon-pill">
                <span>{pokemon.emoji}</span>
                <div>
                  <strong>{pokemon.name}</strong>
                  <small>{pokemon.mood}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Packages</p>
            <h2>Beauty plans built for your routine.</h2>
          </div>

          <div className="pricing-grid">
            {packages.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="featured-tag">Most loved</span>}
                <h3>{plan.name}</h3>
                <div className="price-line">
                  <span className="amount">{plan.price}</span>
                  <small>/ session</small>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/booking" className="primary-btn">
                  Choose plan
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="section-block reviews">
          <div className="section-heading">
            <p className="eyebrow">Trainer reviews</p>
            <h2>Beauty stories that sparkle.</h2>
          </div>

          <div className="review-grid">
            {testimonials.map((entry) => (
              <blockquote key={entry.author} className="review-card">
                <p>“{entry.quote}”</p>
                <footer>{entry.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="booking-panel">
          <div>
            <p className="eyebrow">Ready for your glow-up?</p>
            <h2>Reserve a look tailored to your aura.</h2>
          </div>

          <form className="booking-form">
            <input type="text" placeholder="Your name" aria-label="Your name" />
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <Link to="/booking" className="primary-btn">
              Request booking
            </Link>
          </form>
        </section>
      </main>

      <footer className="footer">
        <span>PokeGlow Salon</span>
        <span>Pokémon-inspired beauty rituals</span>
      </footer>
    </div>
  )
}

export default HomePage
