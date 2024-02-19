import { useState } from "react"
import "./App.css"
import { Universities } from "./components/Universities/Universities"
import ReactHookFormPage from "./pages/ReactHookFormPage"
import SimpleFormPage from "./pages/SimpleFormPage"

function App() {
  // const [universitieName, setUniversitieName] = useState("")
  return (
    <>
      {/* <Universities filterBy={universitieName} /> */}
      {/* <SimpleFormPage /> */}
      <ReactHookFormPage />
    </>
  )
}

export default App
