import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          {/* Column 1: Branding */}
          <div className="footer-column">
            <div className="footer-logo">
              <a href="#" className="logo-text">
                &lt;Dev /&gt;
              </a>
            </div>
            <p className="footer-tagline">Transformando ideas en código escalable</p>
            <p className="footer-copyright">© {currentYear} Todos los derechos reservados</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Navegación</h3>
            <nav className="footer-links">
              <a href="#hero">Inicio</a>
              <a href="#about">Sobre Mí</a>
              <a href="#projects">Proyectos</a>
              <a href="#contact">Contacto</a>
            </nav>
          </div>

          {/* Column 3: Social */}
          <div className="footer-column">
            <h3 className="footer-title">Redes Sociales</h3>
            <div className="footer-socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a href="mailto:hello@example.com" className="social-icon" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-credit">
            Hecho con <Heart size={16} className="heart-icon" /> por tu Dev
          </p>
        </div>
      </div>
    </footer>
  )
}
