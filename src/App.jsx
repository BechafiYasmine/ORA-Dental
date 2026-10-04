
import './App.css';

function App() {
  return (
    <div className="website">
      <header className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">O</span>
          <span>
            <strong>ORA</strong>
            <small>DENTAL STUDIO</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Treatments</a>
          <a href="#technology">Technology</a>
        </nav>

        <a href="#appointment" className="nav-button">
          Book a visit <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR SMILE, OUR CARE
            </span>

            <h1>
              A healthier smile.
              <br />
              <span>A happier you.</span>
            </h1>

            <p>
              Thoughtful dental care in a space designed
              around you. Modern treatments, a gentle
              approach, and a smile you can feel confident in.
            </p>

            <div className="hero-actions">
              <a href="#appointment" className="primary-button">
                Book an appointment <span>↗</span>
              </a>

              <a href="#services" className="text-button">
                Explore our treatments <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Here for every stage of your smile journey.
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
              alt="Modern dental care and smile treatment"
            />

            <div className="floating-card">
              <span className="floating-icon">✳</span>
              <div>
                <strong>Care that feels different.</strong>
                <p>Comfort comes first.</p>
              </div>
            </div>

            <span className="image-caption">
              A new kind of dental experience
            </span>
          </div>
        </section>

        <section className="intro-strip" id="about">
          <p>GENERAL DENTISTRY</p>
          <span>✳</span>
          <p>ORTHODONTICS</p>
          <span>✳</span>
          <p>PREVENTIVE CARE</p>
          <span>✳</span>
          <p>YOUR CONFIDENCE</p>
        </section>

        <section className="services-section" id="services">
          <div>
            <span className="eyebrow">HOW WE CARE FOR YOU</span>
            <h2>Everything your smile needs.</h2>
          </div>

          <p className="section-description">
            From your regular check-up to your orthodontic
            journey, we make every visit feel a little easier.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <span>01 / PREVENT</span>
              <div className="service-symbol">✳</div>
              <h3>General dentistry</h3>
              <p>
                Routine check-ups, professional cleaning,
                and care for your everyday oral health.
              </p>
              <a href="#appointment">Discover treatment ↗</a>
            </article>

            <article className="service-card featured">
              <span>02 / ALIGN</span>
              <div className="service-symbol">⌁</div>
              <h3>Orthodontics</h3>
              <p>
                Personalized braces and alignment care,
                with regular follow-ups throughout your journey.
              </p>
              <a href="#appointment">Discover treatment ↗</a>
            </article>

            <article className="service-card">
              <span>03 / RESTORE</span>
              <div className="service-symbol">◇</div>
              <h3>Restorative care</h3>
              <p>
                Thoughtful treatment plans to help restore
                your teeth and protect your smile.
              </p>
              <a href="#appointment">Discover treatment ↗</a>
            </article>
          </div>
        </section>

        <section className="technology-section" id="technology">
          <div>
            <span className="eyebrow">MODERN CARE, THOUGHTFULLY DONE</span>
            <h2>Technology that helps us care for you.</h2>
            <p>
              A modern dental environment combines skilled
              professionals with tools designed to support
              comfortable, precise treatment.
            </p>
          </div>

          <div className="equipment-list">
            <div><span>01</span> Digital dental X-rays <span>↗</span></div>
            <div><span>02</span> Intraoral scanning <span>↗</span></div>
            <div><span>03</span> Modern sterilization equipment <span>↗</span></div>
            <div><span>04</span> Orthodontic treatment planning <span>↗</span></div>
          </div>
        </section>

        <section className="appointment-section" id="appointment">
          <span className="eyebrow">YOUR NEXT VISIT STARTS HERE</span>
          <h2>Let's take care of that smile.</h2>
          <p>
            Ready to visit us? Send an appointment request
            and our reception team will help you find a suitable time.
          </p>
          <button
            className="primary-button"
            onClick={() =>
              alert('We will build the appointment form next!')
            }
          >
            Request an appointment ↗
          </button>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-icon">O</span>
          <span>
            <strong>ORA</strong>
            <small>DENTAL STUDIO</small>
          </span>
        </a>
        <p>Thoughtful care. Confident smiles.</p>
        <span>© 2026 ORA Dental Studio</span>
      </footer>
    </div>
  );
}

export default App;