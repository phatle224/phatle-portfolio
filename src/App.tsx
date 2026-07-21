import React from 'react';
import {
  Database,
  TrendingUp,
  Terminal,
  Mail,
  MapPin,
  Menu,
  X,
  FileText,
  ChevronRight,
  Award,
  Cpu,
  Shield,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'light';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Handle navbar background change on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Animated Aurora Background Blobs */}
      <div className="aurora-container">
        <div className="aurora-blob blob-green"></div>
        <div className="aurora-blob blob-blue"></div>
        <div className="aurora-blob blob-purple"></div>
        <div className="aurora-blob blob-pink"></div>
        <div className="aurora-mesh"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Sticky Header / Navigation */}
      <header className="header" style={{
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        background: scrolled ? 'var(--header-bg-scrolled)' : 'var(--header-bg-top)'
      }}>
        <div className="container header-container">
          <div className="logo cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="text-gradient-green-blue text-glow font-extrabold" style={{ letterSpacing: '-0.03em' }}>
              &lt; PhatLe /&gt;
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experience')}
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('skills')}
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('education')}
                  className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Header Action Controls */}
          <div className="header-actions">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav animate-slide-up">
          <button onClick={() => scrollTo('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>Home</button>
          <button onClick={() => scrollTo('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>About</button>
          <button onClick={() => scrollTo('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>Experience</button>
          <button onClick={() => scrollTo('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>Skills</button>
          <button onClick={() => scrollTo('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>Projects</button>
          <button onClick={() => scrollTo('education')} className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>Education</button>
          <button onClick={() => scrollTo('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} style={{ background: 'transparent', border: 'none', textAlign: 'left' }}>Contact</button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-wrapper">
        <div className="container hero-content">
          <div className="animate-slide-up">
            <div className="hero-subtitle">Data Engineer</div>
            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="text-gradient-green-blue text-glow">Le Hong Phat</span>
            </h1>
            <p className="hero-desc">
              Data Engineer with 9 months of production experience at AFFINA Insurance, specializing in real-time CDC pipelines (Debezium + Kafka), dbt ELT platforms, and FMCG analytics architecture. I design, build, and optimize enterprise-scale data infrastructure to bridge the gap between raw operational data and business insight at scale.
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollTo('projects')} className="btn btn-primary">
                Explore Projects <ChevronRight size={18} />
              </button>
              <a href="/resume_v2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View PDF CV <FileText size={18} />
              </a>
            </div>
            <div className="contact-socials" style={{ marginTop: '32px' }}>
              <a href="https://github.com/phatle224" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/phat-le-674640330/" target="_blank" rel="noopener noreferrer" className="social-circle-btn blue" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:hongphatle224@gmail.com" className="social-circle-btn purple" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-inner">
                <img src="/avatar.png" alt="Le Hong Phat" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            </div>
            <div className="hero-glow"></div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Profile</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a results-oriented Data Engineer with 9 months of production experience at <strong>AFFINA Insurance</strong>, specializing in real-time CDC pipelines (Debezium + Kafka), dbt ELT platforms, and FMCG analytics architecture. Currently pursuing my Bachelor of Information Technology at <strong>Saigon University</strong> (Expected graduation 2027).
              </p>
              <p>
                At AFFINA Insurance, I built end-to-end data platforms reducing ingestion latency from batch-daily to under 2 seconds, resolved complex online-offline integration issues for 50+ contract variants, and engineered reliable, decoupled event-driven topologies with RabbitMQ.
              </p>
              <p>
                I approach data platforms with an operations-first mindset: ensuring high data availability, enforcing strict data quality guarantees (deploying 54+ automated tests), and implementing real-time observability to detect anomalies in seconds.
              </p>
            </div>

            <div className="stats-grid">
              <div className="glass-card stat-card">
                <div className="stat-number text-gradient-green-blue">9+</div>
                <div className="stat-label">Months Experience</div>
              </div>
              <div className="glass-card stat-card blue-hover">
                <div className="stat-number text-gradient-blue-purple">1,000+</div>
                <div className="stat-label">Ingest events/sec</div>
              </div>
              <div className="glass-card stat-card purple-hover">
                <div className="stat-number" style={{ color: 'var(--aurora-purple)' }}>54+</div>
                <div className="stat-label">dbt Quality Tests</div>
              </div>
              <div className="glass-card stat-card">
                <div className="stat-number text-gradient-rainbow">99%+</div>
                <div className="stat-label">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Career</span>
            <h2 className="section-title">Professional Experience</h2>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">Data Engineer Intern</h3>
                    <div className="timeline-company">AFFINA Insurance</div>
                  </div>
                  <span className="timeline-date">Sep 2025 - May 2026 (9 Mos)</span>
                </div>
                <ul className="timeline-bullets">
                  <li>
                    <strong>Data Platform Architecture (Phase 1):</strong> Built the end-to-end data platform capturing real-time MySQL CDC events via Debezium and scheduled Excel data, consolidating them into staging tables and normalized marts with under 2-second ingestion latency.
                  </li>
                  <li>
                    <strong>Enterprise Data Consolidation (Phase 2):</strong> Evolved the platform to resolve complex online-offline data integration issues. Implemented a custom Contract Pre-Processing and Policy Parser to standardize schema discrepancies across 50+ contract variants, enabling consistent policy reporting.
                  </li>
                  <li>
                    <strong>Idempotency & Deduplication:</strong> Designed a real-time deduplication component utilizing Redis Contract Caching to track and validate record uniqueness, ensuring zero data loss and exact-once insertion into the Operational Data Store.
                  </li>
                  <li>
                    <strong>Event-Driven Architecture:</strong> Designed RabbitMQ event routing topology for 5 downstream consumer applications, implementing at-least-once delivery semantics and decoupling the core data platform from business-layer consumers - enabling independent scaling of each processing pipeline.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>

          <div className="skills-container">
            {/* Left: Core Categories */}
            <div className="glass-card skills-category">
              <h3 className="category-title"><Cpu size={24} className="text-gradient-green-blue" /> Core Focus areas</h3>
              <div className="skills-list">
                <div>
                  <div className="skill-info">
                    <span className="skill-name">Event Streaming & CDC (Kafka, Debezium)</span>
                    <span className="skill-pct">90%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill green-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="skill-info">
                    <span className="skill-name">OLAP & Lakehouse (ClickHouse, Trino, Iceberg)</span>
                    <span className="skill-pct">92%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill green-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="skill-info">
                    <span className="skill-name">Transformation & Orchestration (dbt, Airflow, PySpark)</span>
                    <span className="skill-pct">88%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill blue-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="skill-info">
                    <span className="skill-name">Semantic Layers & Governance (Cube.js, OpenMetadata)</span>
                    <span className="skill-pct">80%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill blue-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="skill-info">
                    <span className="skill-name">Infrastructure & Monitoring (Docker, Prometheus, Grafana)</span>
                    <span className="skill-pct">85%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill blue-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Specific tools grid */}
            <div className="glass-card blue-hover" style={{ padding: '32px' }}>
              <h3 className="category-title"><Terminal size={24} style={{ color: 'var(--aurora-blue)' }} /> Specialized Technologies</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                I am highly comfortable setting up, querying, and managing the following technologies in local development and production environments:
              </p>

              <div className="tech-grid">
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/python.svg" alt="Python" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Python</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/sql.svg" alt="SQL" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">SQL</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--aurora-green)' }}>
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <div className="tech-name">Trino</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/fastapi.svg" alt="FastAPI" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">FastAPI</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/clickhouse.svg" alt="ClickHouse" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">ClickHouse</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/postgresql.svg" alt="Postgres" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Postgres</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/iceberg.svg" alt="Iceberg" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Iceberg</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/apachekafka.svg" alt="Kafka" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Kafka</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/dbt.svg" alt="dbt" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">dbt</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/apacheairflow.svg" alt="Airflow" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Airflow</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/docker.svg" alt="Docker" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Docker</div>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">
                    <img src="/grafana.svg" alt="Grafana" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Grafana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="grid-2">
            {/* Project 1 */}
            <div className="glass-card project-card">
              <div className="project-visual">
                <Database className="project-visual-icon" size={56} />
                <div className="badge badge-green" style={{ position: 'absolute', top: '16px', right: '16px' }}>Real-time OLAP</div>
              </div>
              <div className="project-body">
                <div className="project-header-wrap">
                  <h3 className="project-title">FMCG Real-Time Analytics Platform</h3>
                </div>
                <p className="project-desc">
                  Architected a dual-path (hot/cold) FMCG analytical platform processing 1,000 POS transactions/second. Features real-time ingestion in ClickHouse with Materialized Views, reducing query latencies on 10M+ records to sub-100ms. Integrates historical data via Trino over Iceberg datasets on MinIO, and a Cube.js semantic layer serving Prometheus/Grafana.
                </p>
                <div className="project-tags">
                  <span className="badge">ClickHouse</span>
                  <span className="badge">Kafka</span>
                  <span className="badge">Trino</span>
                  <span className="badge">Apache Iceberg</span>
                  <span className="badge">Cube.js</span>
                  <span className="badge">MinIO</span>
                  <span className="badge">Grafana</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/phatle224/fmcg-real-time-analytics" target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card project-card blue-hover">
              <div className="project-visual blue">
                <TrendingUp className="project-visual-icon" size={56} />
                <div className="badge badge-blue" style={{ position: 'absolute', top: '16px', right: '16px' }}>Streaming + CDC</div>
              </div>
              <div className="project-body">
                <div className="project-header-wrap">
                  <h3 className="project-title">Hybrid Data Ingestion & Streaming Platform</h3>
                </div>
                <p className="project-desc">
                  Built a hybrid ELT platform capturing database modifications (CDC Debezium + Kafka) and batch FastAPI submissions into PostgreSQL. Processes ~120K insurance contracts with under 1.5s CDC latency and peak throughput of ~500 events/sec. Employs a 4-layer Medallion dbt pipeline with 54 automated data quality tests.
                </p>
                <div className="project-tags">
                  <span className="badge">Debezium</span>
                  <span className="badge">Kafka</span>
                  <span className="badge">FastAPI</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">dbt</span>
                  <span className="badge">Prometheus</span>
                  <span className="badge">Grafana</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/phatle224/hybrid-data-ingestion-streaming-platform" target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--aurora-blue)' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Data Platform Governance */}
            <div className="glass-card project-card">
              <div className="project-visual">
                <Shield className="project-visual-icon" size={56} />
                <div className="badge badge-green" style={{ position: 'absolute', top: '16px', right: '16px' }}>Governance & Obs</div>
              </div>
              <div className="project-body">
                <div className="project-header-wrap">
                  <h3 className="project-title">Data Platform Governance & Observability</h3>
                </div>
                <p className="project-desc">
                  Deployed an enterprise-grade governance and observability stack as a companion repository for the FMCG Analytics platform. Automatically catalogs PostgreSQL, ClickHouse, and Trino schemas using OpenMetadata. Tracks data lineage from raw to aggregated marts using OpenLineage during scheduled Apache Airflow dbt runs. Integrates Prometheus and AlertManager to route real-time pipeline SLO breach alerts to Slack, and aggregates container logs via Loki & Promtail.
                </p>
                <div className="project-tags">
                  <span className="badge">OpenMetadata</span>
                  <span className="badge">OpenLineage</span>
                  <span className="badge">Apache Airflow</span>
                  <span className="badge">dbt</span>
                  <span className="badge">Prometheus</span>
                  <span className="badge">Grafana Loki</span>
                  <span className="badge">Docker</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/phatle224/data-platform-governance" target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5: Agent SQL */}
            <div className="glass-card project-card blue-hover">
              <div className="project-visual blue">
                <Terminal className="project-visual-icon" size={56} />
                <div className="badge badge-blue" style={{ position: 'absolute', top: '16px', right: '16px' }}>AI Agents & NL2SQL</div>
              </div>
              <div className="project-body">
                <div className="project-header-wrap">
                  <h3 className="project-title">Agent SQL (NL2SQL Platform)</h3>
                </div>
                <p className="project-desc">
                  Co-developed a production-ready NL2SQL platform powered by AI Agents. Translates natural language queries into secure SQL executions. Built with a microservices architecture featuring `nl2sql-service` for prompt mapping and `query-service` for safe, audited database executions with strict protection against prompt injection and hallucinations.
                </p>
                <div className="project-tags">
                  <span className="badge">Python</span>
                  <span className="badge">FastAPI</span>
                  <span className="badge">OpenAI API</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">React</span>
                  <span className="badge">Docker</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/phatle224/Agent_SQL" target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--aurora-blue)' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6: AI FOR EDUCATION */}
            <div className="glass-card project-card purple-hover">
              <div className="project-visual purple">
                <Cpu className="project-visual-icon" size={56} />
                <div className="badge badge-purple" style={{ position: 'absolute', top: '16px', right: '16px' }}>Collab AI Project</div>
              </div>
              <div className="project-body">
                <div className="project-header-wrap">
                  <h3 className="project-title">AI for Education Platform</h3>
                </div>
                <p className="project-desc">
                  Collaborative platform utilizing LLMs and generative AI tools to optimize learning workflows. Features intelligent tutoring, automated grading assistants, and dynamic curriculum generation. Aims to streamline educational processes and provide personalized tutoring paths.
                </p>
                <div className="project-tags">
                  <span className="badge">Python</span>
                  <span className="badge">PyTorch</span>
                  <span className="badge">HuggingFace</span>
                  <span className="badge">FastAPI</span>
                  <span className="badge">Next.js</span>
                  <span className="badge">Gemini API</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/phatle224/AI-FOR-EDUCATION" target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--aurora-purple)' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Credentials</span>
            <h2 className="section-title">Education & Certifications</h2>
          </div>

          <div className="grid-2">
            {/* Education Card */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <h3 className="category-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', marginBottom: '24px' }}>
                <Award size={24} style={{ color: 'var(--aurora-green)' }} /> Education
              </h3>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-normal)' }}>Saigon University (SGU)</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--border-color)', padding: '4px 10px', borderRadius: '12px' }}>2022 - Present (Expected 2027)</span>
                </div>
                <div style={{ color: 'var(--text-light)', fontWeight: '500', fontSize: '0.95rem', marginTop: '4px' }}>Bachelor of Information Technology</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '2px' }}>Ho Chi Minh City, Vietnam</div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <h5 style={{ fontWeight: '600', color: 'var(--text-normal)', fontSize: '0.95rem', marginBottom: '8px' }}>Academic Achievements & Coursework:</h5>
                <ul className="timeline-bullets" style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>
                    <strong>Academic Excellence Scholarship:</strong> Awarded for 3 consecutive semesters (HK1 2025 - HK1 2026). GPA: 7.4/10.
                  </li>
                  <li>
                    <strong>Relevant Coursework:</strong> Database Systems, Data Structures & Algorithms, Big Data Technologies, Software Engineering.
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications & Languages Card */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <h3 className="category-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', marginBottom: '24px' }}>
                <FileText size={24} style={{ color: 'var(--aurora-blue)' }} /> Certifications & Languages
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-normal)' }}>IBM Data Engineering Professional Certificate</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Coursera / IBM</div>
                  </div>
                  <span style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', color: 'var(--text-muted)' }}>Apr 2025 - Present</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-normal)' }}>IBM Data Analyst Professional Certificate</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Coursera / IBM</div>
                  </div>
                  <span style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', color: 'var(--text-muted)' }}>Feb 2025</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-normal)' }}>SQL (Advanced) Certificate</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>HackerRank</div>
                  </div>
                  <span style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', color: 'var(--text-muted)' }}>Dec 2025</span>
                </div>
              </div>

              <div style={{ marginTop: '24px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <h5 style={{ fontWeight: '600', color: 'var(--text-normal)', fontSize: '0.95rem', marginBottom: '12px' }}>Languages:</h5>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ background: 'var(--border-color)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem' }}>
                    <strong style={{ color: 'var(--text-normal)' }}>Vietnamese:</strong> <span style={{ color: 'var(--text-light)' }}>Native</span>
                  </div>
                  <div style={{ background: 'var(--border-color)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem' }}>
                    <strong style={{ color: 'var(--text-normal)' }}>English:</strong> <span style={{ color: 'var(--text-light)' }}>B2 (IELTS in progress)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Contact</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Let's build something scalable.</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                I am currently looking for full-time/hybrid Data Engineer opportunities. If you want to talk about CDC pipeline optimization, ClickHouse query patterns, or just grab a coffee, feel free to reach out!
              </p>

              <div className="contact-item" style={{ marginTop: '20px' }}>
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <a href="mailto:hongphatle224@gmail.com" className="contact-value hover:underline">hongphatle224@gmail.com</a>
                </div>
              </div>

              <div className="contact-item blue">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Ho Chi Minh City, Vietnam</div>
                </div>
              </div>

              <div className="contact-item purple">
                <div className="contact-icon-box">
                  <Award size={20} />
                </div>
                <div>
                  <div className="contact-label">Availability</div>
                  <div className="contact-value">Immediate Full-time/Hybrid (Expected graduation 2027)</div>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-input" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" className="form-textarea" placeholder="Describe your project, team, or opportunity..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ border: 'none', width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="contact-socials" style={{ marginTop: 0 }}>
            <a href="https://github.com/phatle224" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/phat-le-674640330/" target="_blank" rel="noopener noreferrer" className="social-circle-btn blue" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:hongphatle224@gmail.com" className="social-circle-btn purple" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Le Hong Phat. Handcrafted with <span className="footer-heart">❤</span> using React, TypeScript & Vite.
          </p>
        </div>
      </footer>
    </>
  );
}
