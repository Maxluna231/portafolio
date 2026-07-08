import { useEffect, useMemo, useState } from 'react';
import '../style.css';
import '../dark.css';

const educationItems = [
  {
   
    title: 'Ingeniería en Informática',
    text: 'Formación en desarrollo de software, bases de datos, arquitectura web, algoritmos y desarrollo de soluciones tecnológicas.',
  },
  {
    
    title: 'Desarrollo Web y ServiceNow',
    text: 'Experiencia en el desarrollo de aplicaciones web con React, HTML, CSS y JavaScript, además de automatización de procesos mediante Flow Designer y UI Policies en ServiceNow.',
  },
  {
   
    title: 'Experiencia y Mejora Continua',
    text: 'Participación en soporte TI, automatización de procesos, resolución de incidencias y aplicación de buenas prácticas de desarrollo, pruebas y control de versiones.',
  },
];

const services = [
  {
    icon: 'bx-code-alt',
    title: 'Desarrollo Web',
    text: 'Diseño y desarrollo de aplicaciones web modernas con React, HTML, CSS, JavaScript, PHP y Laravel, enfocadas en rendimiento, escalabilidad y experiencia de usuario.',
  },
  {
    icon: 'bx-layout',
    title: 'Automatización con ServiceNow',
    text: 'Automatización de procesos mediante Flow Designer, UI Policies, Client Scripts y configuración de formularios para optimizar la gestión de servicios e incidencias.',
  },
  {
    icon: 'bx-bug',
    title: 'Soporte TI y Mejora Continua',
    text: 'Resolución de incidencias, pruebas funcionales y optimización de procesos tecnológicos, aplicando buenas prácticas para mejorar la calidad y eficiencia de las soluciones.',
  },
];

const projects = [
  {
    title: 'Automatización de Procesos en ServiceNow',
    description: 'Desarrollo de soluciones utilizando Flow Designer, UI Policies, Client Scripts y configuración de formularios para automatizar procesos como restablecimiento de contraseñas, campañas de notificación a usuarios inactivos y validaciones de formularios.',
    tags: ['ServiceNow', 'Flow Designer', 'JavaScript' , 'UI Policies' ],
  },
  {
    title: 'App Móvil de Música (En desarrollo)',
    description: 'Aplicación móvil para reproducir música, crear listas de reproducción y administrar una biblioteca personal con una interfaz moderna y una experiencia intuitiva para el usuario.',
    tags: ['Java', 'Firebase'],
  },
  {
    title: 'App de Venta de Ropa Artesanal (En desarrollo)',
    description: 'Aplicación móvil orientada a la comercialización de ropa artesanal mexicana, con catálogo de productos, carrito de compras y gestión de pedidos para impulsar el comercio local.',
    tags: ['Java', 'Firebase'],
  },
];

function StarRating({ value }) {
  return (
    <div className="rating" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`bx ${i < value ? 'bxs-star' : 'bx-star'}`} />
      ))}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(
    () => [
      ['home', 'Inicio'],
      ['education', 'Formación Profesional'],
      ['services', 'Habilidades'],
      ['testimonials', 'Proyectos'],
      ['contact', 'Contacto'],
    ],
    []
  );

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const top = window.scrollY;
      let current = 'home';

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 180;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = sec.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Contacto de portafolio - ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
    window.location.href = `mailto:maxluna231@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo" onClick={closeMenu}>
          Maximino <span>Luna</span>
        </a>

        <button
          id="menu-icon"
          className="icon-button menu-button"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} />
        </button>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <label id="label_toggle" className="theme-switch" htmlFor="toggle">
            <i className={`bx ${dark ? 'bx-sun' : 'bx-moon'}`} />
            <span>{dark ? 'Claro' : 'Oscuro'}</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            checked={dark}
            onChange={(event) => setDark(event.target.checked)}
          />
        </nav>
      </header>

      <main>
        <section className="home" id="home">
          <div className="home-content">
            <p className="eyebrow">Software Developer Jr.</p>
            <h1>
              Hola, soy <span>Maximino Luna</span>
            </h1>
            <h3 className="text-animation">
              Especializado en <span></span>
            </h3>
            <p>
              Soy Ingeniero en Informática con experiencia en desarrollo web, 
              soporte TI y automatización de procesos en ServiceNow. 
              He trabajado con JavaScript, React, PHP, Laravel, UI Policies y Flow Designer.
              Me interesa seguir creciendo como desarrollador de software, 
              creando soluciones funcionales, limpias y orientadas a resolver problemas 
              reales.
            </p>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/maximino-luna-de-la-cruz/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Maximino Luna"
              >
                <i className="bx bxl-linkedin" />
              </a>
              <a
                href="https://github.com/Maxluna231/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Maximino Luna"
              >
                <i className="bx bxl-github" />
              </a>
            </div>

            <div className="btn-group">
              <a href="/download/CV_Maximino_Luna.pdf" download="CV_Maximino_Luna" className="btn">
                Curriculum
              </a>
              <a href="#contact" className="btn btn-outline">
                Contacto
              </a>
            </div>
          </div>

          <div className="home-img">
            <img
              src="/image/foto_perfil_portafolio.jpg"
              alt="Foto de portafolio"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                event.currentTarget.parentElement.classList.add('image-fallback');
              }}
            />
          </div>
        </section>

        <section className="education" id="education">
          <div className="section-heading">
            <p className="eyebrow">Trayectoria</p>
            <h2>
              Mi <span>Formación</span>
            </h2>
          </div>

          <div className="timeline">
            {educationItems.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">MIS HABILIDADES</p>
            <h2>
             Áreas <span>de Especialización</span>
            </h2>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <i className={`bx ${service.icon}`} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Trabajo reciente</p>
            <h2>
              Mis <span>proyectos</span>
            </h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <StarRating value={5 - (index === 2 ? 1 : 0)} />
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Hablemos</p>
            <h2>
              <span>Contactame</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Tu nombre" required />
              <input type="email" name="email" placeholder="Tu correo" required />
            </div>
            <textarea name="message" rows="7" placeholder="Escribe tu mensaje..." required />
            <button className="btn" type="submit">
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/maximino-luna-de-la-cruz/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://github.com/Maxluna231/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bx bxl-github" />
          </a>
        </div>

        <ul className="list">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>

        <p className="copyright">© Maximino Luna 2026 | Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
