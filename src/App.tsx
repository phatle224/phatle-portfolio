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
  Cpu
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  // Handle navbar background change on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
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
        background: scrolled ? 'rgba(252, 250, 244, 0.85)' : 'rgba(252, 250, 244, 0.4)'
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
                  onClick={() => scrollTo('contact')}
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              I am a results-oriented Data Engineer specializing in real-time streaming architectures, high-performance OLAP systems, and automated data quality. I design, build, and optimize enterprise-scale data infrastructure to bridge the gap between raw telemetry and business decisions.
            </p>
            <div className="hero-actions">
              <button onClick={() => scrollTo('projects')} className="btn btn-primary">
                Explore Projects <ChevronRight size={18} />
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View PDF CV <FileText size={18} />
              </a>
            </div>
            <div className="contact-socials" style={{ marginTop: '32px' }}>
              <a href="https://github.com/phatle224" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com/in/phatle224" target="_blank" rel="noopener noreferrer" className="social-circle-btn blue" aria-label="LinkedIn">
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
                <img src="/avatar.jpg" alt="Le Hong Phat" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
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
                I am a final-year Information Technology student (graduating and available for full-time work starting <strong>July 2026</strong>) with a strong foundation in modern data engineering principles.
              </p>
              <p>
                My professional experience includes a 9-month tenure at <strong>AFFINA Insurance</strong>, where I developed and managed real-time CDC ingestion pipelines and dbt orchestration layers. I specialize in the modern open-source data stack, building scalable systems that handle high throughput while keeping latencies minimal.
              </p>
              <p>
                I approach data platforms with an operations-first mindset: ensuring high data availability, enforcing strict quality guarantees, mapping lineages, and deploying real-time observability to ensure anomalies are detected in seconds rather than hours.
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
                    <h3 className="timeline-role">Data Engineer</h3>
                    <div className="timeline-company">AFFINA Insurance</div>
                  </div>
                  <span className="timeline-date">Oct 2025 - Present (9 Mos)</span>
                </div>
                <ul className="timeline-bullets">
                  <li>
                    <strong>Real-time CDC Pipelines:</strong> Architected and deployed CDC pipelines using Debezium and Kafka Connect, streaming changes from 3 source PostgreSQL databases to a centralized analytics repository with sub-2s latency and zero message loss.
                  </li>
                  <li>
                    <strong>dbt & Data Quality:</strong> Built and optimized a 4-layer Medallion (Bronze → Silver → Gold → Mart) dbt pipeline consolidating 5+ data sources (relational databases, flat files, REST APIs) into the analytics warehouse. Developed 54 automated quality tests, enforcing strict constraints for 99%+ schema-level accuracy.
                  </li>
                  <li>
                    <strong>Infrastructure Observability:</strong> Set up end-to-end monitoring using Prometheus & Grafana to track Kafka consumer group lag and database performance, lowering average incident detection times from hours to under 5 minutes.
                  </li>
                  <li>
                    <strong>Cross-functional Teamwork:</strong> Collaborated directly with Business Analysts and Business Units to translate operational workflows into clean, queryable dimensional models (Star Schemas), accelerating monthly reporting intervals.
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
                    <span className="skill-name">OLAP & Data Warehousing (ClickHouse, PostgreSQL)</span>
                    <span className="skill-pct">92%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill green-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="skill-info">
                    <span className="skill-name">Transformation & Modelling (dbt, Airflow, PySpark)</span>
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
                    <span className="skill-name">DevOps & Observability (Docker, K8s, Grafana)</span>
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
                  <div className="tech-icon">
                    <img src="/java.svg" alt="Java" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div className="tech-name">Java</div>
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
                  Designed a dual-path (hot/cold) data lakehouse. POS simulated events (1k/s) flow via FastAPI and Apache Kafka. The hot path aggregates in ClickHouse using Materialized Views to achieve sub-100ms analytics queries. The cold path uses Kafka Connect S3 Sink to MinIO, querying raw data in Apache Iceberg format. Trino bridges both paths via SQL. Cube.js serves as the semantic layer, exposing business metrics to a custom Grafana dashboard.
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
                  <a href="https://github.com/phatle224/fmcg-realtime-analytics-platform" target="_blank" rel="noopener noreferrer" className="project-link">
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
                  Integrated real-time database replication (CDC using Debezium and Kafka) with batch payloads from FastAPI endpoints. Implemented idempotent loading mechanics utilizing compound business keys and deduplication windowing to clean operational streams. Directed a multi-tier dbt project validating dimension integrity via schema and integration testing, and monitored consumer lag via Grafana.
                </p>
                <div className="project-tags">
                  <span className="badge">Debezium</span>
                  <span className="badge">Kafka</span>
                  <span className="badge">FastAPI</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">dbt</span>
                  <span className="badge">Prometheus</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/phatle224/Hybrid-Data-Ingestion-Streaming-Platform" target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--aurora-blue)' }}>
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
                I am currently looking for full-time Data Engineer opportunities (available from July 2026). If you want to talk about CDC pipeline optimization, ClickHouse query patterns, or just grab a coffee, feel free to reach out!
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
                  <div className="contact-value">Immediate Full-time/Hybrid (July 2026 onwards)</div>
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
            <a href="https://linkedin.com/in/phatle224" target="_blank" rel="noopener noreferrer" className="social-circle-btn blue" aria-label="LinkedIn">
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
