import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalContextProvider } from './Contexts'

// PAGES
import Home from './pages/Home.jsx'
import Subnets from './pages/Subnets.jsx'
import Subnet from './pages/Subnet.jsx'
import Help from './pages/Help.jsx'
import NotFound from './pages/404.jsx'

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <Layout>
            <Routes>
              <Route path="/" element={ <Home />}></Route>
              <Route path="/subnets" element={ <Subnets />}></Route>
              <Route path="/subnet" element={ <Subnet />}></Route>
              <Route path="/help" element={ <Help />}></Route>
              <Route path="*" element={ <NotFound />}></Route>
            </Routes>
        </Layout>
      </GlobalContextProvider>
    </Router>
  )
}

export default App
