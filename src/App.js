import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { GlobalRoutes } from "./routes/GlobalRoutes"
import { fetchUserProfile } from "./store/actions/userActions"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [])
  return (
    <BrowserRouter>
      <GlobalRoutes />
    </BrowserRouter>
  )
}

export default App
