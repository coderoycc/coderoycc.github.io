import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Layout from "./components/layout/Layout"
import Home from "./app/page"
import "./App.css"

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}
