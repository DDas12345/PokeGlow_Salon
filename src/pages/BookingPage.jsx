import { Link } from 'react-router-dom'

const stylistOptions = [
  'Pikachu Glow Artist',
  'Sylveon Hair Stylist',
  'Jigglypuff Facial Expert',
  'Bulbasaur Spa Specialist',
]

const timeSlots = ['9:00 AM', '11:30 AM', '1:00 PM', '3:30 PM', '5:00 PM']

function BookingPage() {
  return (
    <div className="page-shell booking-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">⚡</span>
          <span>PokeGlow Salon</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/ai-lab">AI Lab</Link>
        </nav>

        <Link to="/" className="secondary-btn nav-cta">
          Back home
        </Link>
      </header>

      <main className="booking-layout">
        <section className="booking-form-card">
          <p className="eyebrow">Appointment booking</p>
          <h1>Plan your next glow-up</h1>

          <form className="booking-form-page">
            <div className="field-row two-col">
              <label>
                <span>Full name</span>
                <input type="text" placeholder="Your trainer name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
            </div>

            <div className="field-row two-col">
              <label>
                <span>Service</span>
                <select defaultValue="Pikachu Pop Glow">
                  <option>Pikachu Pop Glow</option>
                  <option>Bulbasaur Bloom</option>
                  <option>Sylveon Silk Hair</option>
                  <option>Charmander Flame Mani</option>
                </select>
              </label>
              <label>
                <span>Stylist</span>
                <select defaultValue={stylistOptions[0]}>
                  {stylistOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="field-row two-col">
              <label>
                <span>Date</span>
                <input type="date" />
              </label>
              <label>
                <span>Session length</span>
                <select defaultValue="60 minutes">
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                  <option>90 minutes</option>
                  <option>120 minutes</option>
                </select>
              </label>
            </div>

            <div className="time-grid">
              {timeSlots.map((slot) => (
                <button key={slot} type="button" className="time-slot">
                  {slot}
                </button>
              ))}
            </div>

            <label>
              <span>Personal notes</span>
              <textarea rows="4" placeholder="Tell us about your preferred look, color palette, or style goals." />
            </label>

            <button type="submit" className="primary-btn submit-btn">
              Confirm booking
            </button>
          </form>
        </section>

        <aside className="booking-summary">
          <div className="summary-card">
            <p className="eyebrow">Your glow plan</p>
            <h2>Pikachu Pop Glow</h2>
            <div className="summary-price">$58</div>
            <ul>
              <li>Vitamin C brightening peel</li>
              <li>Hydrating berry mask</li>
              <li>Electric shimmer finishing glow</li>
            </ul>
          </div>

          <div className="summary-card mini-card">
            <p className="eyebrow">Salon note</p>
            <p>
              We recommend arriving 10 minutes early for skincare prep and a quick styling consultation.
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default BookingPage
