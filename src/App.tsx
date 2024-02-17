import "./App.css"
import List from "./components/List/List"
import { URL_UNIVERSITIES } from "./constants"
import ReactHookFormPage from "./pages/ReactHookFormPage"
import SimpleFormPage from "./pages/SimpleFormPage"

function App() {
  return (
    <>
      <List url={URL_UNIVERSITIES} />
      {/* <SimpleFormPage /> */}
      {/* <ReactHookFormPage /> */}
    </>
  )
}

export default App
