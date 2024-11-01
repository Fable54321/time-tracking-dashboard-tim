import Home from '../Home/Home'
import Root from '../Root/Root'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
      </Route>
  </Routes>
 
)


}

export default App
