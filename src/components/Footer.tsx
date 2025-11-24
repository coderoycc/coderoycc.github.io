export default function Footer() {
  const links = [
    { label: "Sobre Mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Portfolio</h3>
            <p className="text-slate-400">Desarrollador Fullstack</p>
            <p className="text-slate-500 text-sm mt-2">© 2025 Todos los derechos reservados</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 smooth-transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Conecta Conmigo</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 smooth-transition">
                GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 smooth-transition">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 smooth-transition">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">Hecho con ❤️ en React</div>
      </div>
    </footer>
  )
}
