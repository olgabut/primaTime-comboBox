import { useState } from "react"
import "./App.css"
import { Universities } from "./components/Universities/Universities"
import FormPage from "./pages/FormPage"
import ReactHookFormPage from "./pages/ReactHookFormPage"
import SimpleFormPage from "./pages/SimpleFormPage"

function App() {
  // const [universitieName, setUniversitieName] = useState("")
  return (
    <>
      <FormPage />
      {/* <Universities filterBy={universitieName} /> */}
      {/* <SimpleFormPage /> */}
      {/* <ReactHookFormPage /> */}
    </>
  )
}

export default App
