import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import ScrollToTop from "../ScrollToTop"

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
