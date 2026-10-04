import "./App.css";

const Arrow = () => <span className="arr" aria-hidden="true">→</span>;

const Sparkle = ({ size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <path d="M12 3c.6 4.6 2.4 6.4 9 9-6.6 2.6-8.4 4.4-9 9-.6-4.6-2.4-6.4-9-9 6.6-2.6 8.4-4.4 9-9z" />
  </svg>
);

const icons = {
  tooth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      <path d="M7.5 3.5C5 3.5 3.5 5.5 3.5 8c0 2 1 3.5 1.5 5.5.5 2.2.6 7 2.5 7s1.6-4.2 2.8-4.2h3.4c1.2 0 .9 4.2 2.8 4.2s2-4.8 2.5-7c.5-2 1.5-3.5 1.5-5.5 0-2.5-1.5-4.5-4-4.5-1.7 0-2.7.9-4.5.9s-2.8-.9-4.5-.9z" />
    </svg>
  ),
  braces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="5" />
      <path d="M8 7v10M12 7v10M16 7v10M3.5 12h17" />
    </svg>
  ),
  sparkle: <Sparkle size={24} />,
  smile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      <path d="M3 9c2 7 16 7 18 0" />
    </svg>
  ),
};

const strip = [
  ["tooth", "General dentistry"],
  ["braces", "Orthodontics"],
  ["sparkle", "Preventive care"],
  ["smile", "Your confidence"],
];

const cards = [
  {
    tag: "01 / Prevent",
    title: "General dentistry",
    text: "Routine check-ups, professional cleaning, and care for your everyday oral health.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
    position: "center 52%",
  },
  {
    tag: "02 / Align",
    title: "Orthodontics",
    text: "Personalized braces and alignment care, with regular follow-ups throughout your journey.",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    position: "center 48%",
  },
  {
    tag: "03 / Restore",
    title: "Restorative care",
    text: "Thoughtful treatment plans to help restore your teeth and protect your smile.",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85",
    position: "center 48%",
  },
];

export default function App() {
  return (
    <div className="page" id="top">
      <header className="nav">
        <a className="brand" href="#top" aria-label="ORA Dental Studio home">
          <span className="brand-mark"><Sparkle size={18} /></span>
          <span className="brand-text">
            <strong>ORA</strong>
            <small>Dental Studio</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a className="active" href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#treatments">Treatments</a>
          <a href="#technology">Technology</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn nav-booking" href="#contact">
          Book an appointment <Arrow />
        </a>
      </header>

      <main>
        <section className="hero">
          <span className="leaf" aria-hidden="true" />
          <div className="hero-panel">
            <p className="eyebrow">Your smile, our care</p>
            <h1>A healthier smile.<br />A happier you.</h1>
            <p className="lead">
              Thoughtful dental care in a space designed around you. Modern
              treatments, a gentle approach, and a smile you can feel confident in.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#contact">Book an appointment <Arrow /></a>
              <a className="link-line" href="#treatments">Explore our treatments <Arrow /></a>
            </div>
            <p className="hero-note">
              <span className="pin" />
              Here for every stage of your smile journey.
            </p>
          </div>

          <div
            className="hero-photo"
            role="img"
            aria-label="Elegant contemporary dental treatment room with sage green details"
          />
        </section>

        <section className="strip" aria-label="Our areas of care">
          <div className="strip-inner">
            {strip.map(([icon, label]) => (
              <div className="strip-item" key={label}>
                <span className="strip-icon">{icons[icon]}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="care" id="treatments">
          <div className="care-intro">
            <p className="eyebrow">How we care for you</p>
            <h2>Everything your<br />smile needs.</h2>
            <p className="care-text">
              From your regular check-up to your orthodontic journey, we make
              every visit feel a little easier.
            </p>
            <a className="care-more" href="#contact">Find your treatment <Arrow /></a>
          </div>

          <div className="cards">
            {cards.map((card) => (
              <article className="card" key={card.title}>
                <div
                  className="card-img"
                  role="img"
                  aria-label={card.title}
                  style={{
                    backgroundImage: `url("${card.img}")`,
                    backgroundPosition: card.position,
                  }}
                />
                <div className="card-body">
                  <p className="tag">{card.tag}</p>
                  <h3>{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                  <a href="#contact">Discover treatment <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="technology" id="technology">
          <div className="technology-copy" id="about">
            <p className="eyebrow">Modern care, thoughtfully delivered</p>
            <h2>Better technology.<br />A gentler experience.</h2>
            <p>
              Modern dental equipment and a personal, patient-first approach
              help make every visit more comfortable.
            </p>
            <a className="btn" href="#contact">Discover our approach <Arrow /></a>
          </div>
          <div className="technology-photo" role="img" aria-label="Modern dental studio interior" />
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Your next chapter starts here</p>
          <h2>Ready to feel good about your smile?</h2>
          <p>Take the first step and contact our team to request an appointment.</p>
          <a className="btn" href="mailto:hello@oradental.example">Request an appointment <Arrow /></a>
          <span>A little time for you. A lifetime of smiles.</span>
        </section>

        <footer className="footer">
          <a className="brand" href="#top" aria-label="ORA Dental Studio home">
            <span className="brand-mark"><Sparkle size={16} /></span>
            <span className="brand-text">
              <strong>ORA</strong>
              <small>Dental Studio</small>
            </span>
          </a>
          <p>Thoughtful care. Confident smiles.</p>
          <a href="#top">Back to top ↑</a>
          <small>© 2026 ORA Dental Studio</small>
        </footer>
      </main>
    </div>
  );
}
