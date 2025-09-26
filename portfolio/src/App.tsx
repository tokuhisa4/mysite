import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import PageViewTracker from './components/pageview_tracker'

function App() {
  return (
    <BrowserRouter>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App