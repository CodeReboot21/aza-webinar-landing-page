import './App.css'

function RegisterButton() {
  return (
    <a href="https://forms.gle/XKwdAVDBF94g91Fh9" className="btn btn-primary">Register for Free</a>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Art Zone Academy</p>
            <h1 className="hero-title">Struggling with Portraits? These 3 Secrets Will Change Everything.</h1>
            <p className="hero-subtitle">Join Our Free Webinar</p>
            <p className="hero-byline">By Uttara Javakhedkar — Founder / Art Coach</p>
            <p className="hero-desc">Ignite your creative spark in our free webinar! Discover the transformative power of art and unlock your hidden talents. Join us on this enlightening journey and explore the boundless possibilities of self-expression.</p>
            <div className="hero-meta">
              <span className="badge">Starts on May 18, 2024</span>
              <span className="badge">Time: 4:00 PM – 5:00 PM (Google Meet)</span>
              <span className="badge badge-accent">Bonuses worth ₹7,999</span>
            </div>
            <div className="hero-actions">
              <RegisterButton />
            </div>
          </div>
          <div className="hero-media">
            <div className="image-frame portrait">
              <img src="/portrait.jpg" alt="Portrait" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Section id="mentor" title="Meet Your Mentor">
          <div className="card-grid">
            <div className="card card-wide">
              <div className="card-body mentor-grid">
                <div className="image-frame mentor">
                  <img src="/mentor.png" alt="Mentor photo" />
                </div>
                <div>
                  <div className="card-title mentor-title">Uttara Javakhedkar — Art Coach</div>
                  <p>As the founder of Art Zone Academy, my mission is to empower individuals to embark on a journey of self-discovery through art. I believe everyone possesses an inherent creative spark — I am here to help ignite that spark and nurture its growth. Through my expertise and passion, I strive to inspire and guide others in unleashing their artistic potential, fostering personal growth, and finding joy in self-expression.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="community" title="Why Join This Community?">
          <div className="card-grid">
            <div className="card">
              <div className="card-title">Unlock Your Inner Joy</div>
              <div className="card-body">Rediscover your innate creativity and tap into your artistic side.</div>
            </div>
            <div className="card">
              <div className="card-title">Connect with Like-Minded Individuals</div>
              <div className="card-body">Build a supportive community of freedom-seekers who prioritise family, happiness, peace and creativity.</div>
            </div>
            <div className="card">
              <div className="card-title">Personalised Guidance</div>
              <div className="card-body">Get expert support tailored to your needs; learn art techniques for increased happiness & creative fulfillment.</div>
            </div>
            <div className="card">
              <div className="card-title">Private Social Network</div>
              <div className="card-body">Forge bonds and find support on your happiness and creativity journey within our exclusive community.</div>
            </div>
            <div className="card">
              <div className="card-title">Embrace Freedom</div>
              <div className="card-body">Break free from stress and monotony; choose happiness, play and self-expression.</div>
            </div>
            <div className="card">
              <div className="card-title">Access Exclusive Webinar</div>
              <div className="card-body">Gain confidence and find a new outlet for self-expression and personal growth.</div>
            </div>
          </div>
        </Section>

        <Section id="offer" title="Here’s What You Get — For Free">
          <div className="card-grid">
            <div className="card">
              <div className="card-title">Free Webinar</div>
              <div className="card-body"><span className="card-value">₹2,999</span></div>
            </div>
            <div className="card">
              <div className="card-title">1-on-1 Consultation</div>
              <div className="card-body"><span className="card-value">₹2,999</span></div>
            </div>
            <div className="card">
              <div className="card-title">Community Access</div>
              <div className="card-body"><span className="card-value">₹2,999</span></div>
            </div>
            <div className="card">
              <div className="card-title">3 Case Studies / Real-life Examples</div>
              <div className="card-body"><span className="card-value">₹2,999</span></div>
            </div>
          </div>
          <p className="total">Total Value: <strong>₹11,996</strong> — Yours totally free!</p>
          <p className="limited">Limited spots! Grab yours now!</p>
          <RegisterButton />
        </Section>

        <Section id="audience" title="Who Is This For?">
          <div className="card-grid">
            <div className="card card-wide">
              <div className="card-body">
                <ul className="chip-list">
                  <li className="chip">Aspiring artists seeking guidance and inspiration</li>
                  <li className="chip">Individuals looking to explore their creative side</li>
                  <li className="chip">Hobbyists seeking a new and fulfilling pastime</li>
                  <li className="chip">Stay-at-home parents in need of a creative outlet</li>
                  <li className="chip">Retirees seeking a meaningful and engaging activity</li>
                  <li className="chip">Professionals seeking stress relief and a creative outlet</li>
                  <li className="chip">Students interested in developing their artistic skills</li>
                  <li className="chip">Art enthusiasts wanting to deepen their appreciation</li>
                  <li className="chip">Anyone seeking personal growth and self-discovery</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="bonuses" title="Exclusive Bonuses for You (Even Though It’s Free)">
          <div className="card-grid">
            <div className="card"><div className="card-title">Community Access</div><div className="card-body">Private streams & community group (₹2,999)</div></div>
            <div className="card"><div className="card-title">1-on-1 Consultation</div><div className="card-body">Personalized guidance to improve your skills (₹2,999)</div></div>
            <div className="card"><div className="card-title">VIP Community</div><div className="card-body">Network of like-minded creatives for support & inspiration (₹2,999)</div></div>
            <div className="card"><div className="card-title">Live Q&A</div><div className="card-body">Ask me anything about acrylic painting, techniques, and creative growth (₹2,999)</div></div>
            <div className="card"><div className="card-title">Register for Free</div><div className="card-body">₹0 — Early bird price</div></div>
          </div>
        </Section>

        <Section id="faq" title="FAQ">
          <div className="card-grid">
            <div className="card">
              <div className="card-title">What level of artistic experience is required to attend this webinar?</div>
              <div className="card-body">This webinar is designed for all levels — from complete beginners to experienced artists. No prior experience is required to join and benefit.</div>
            </div>
            <div className="card">
              <div className="card-title">Will the webinar be recorded and available for viewing later if I cannot attend live?</div>
              <div className="card-body">No — we won’t be sharing any recording. We recommend attending the live session to experience it fully.</div>
            </div>
            <div className="card">
              <div className="card-title">How can attending this webinar help me achieve my creative goals?</div>
              <div className="card-body">You’ll gain insights to rekindle your creative passion, learn techniques to improve skills, and develop a roadmap to pursue art for personal enrichment and personal growth.</div>
            </div>
          </div>
        </Section>

        <Section id="register" title="Ready to Begin Your Creative Journey?">
          <p>If you’re ready to unlock your creativity, connect with a community, and discover the joy of self-expression — don’t wait.</p>
          <RegisterButton />
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Art Zone Academy</p>
        </div>
      </footer>
    </div>
  )
}
