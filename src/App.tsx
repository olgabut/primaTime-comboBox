import { useState } from "react"
import "./App.css"
import { Universities } from "./components/Universities/Universities"
import ReactHookFormPage from "./pages/ReactHookFormPage"
import SimpleFormPage from "./pages/SimpleFormPage"

function App() {
  const [universitieName, setUniversitieName] = useState("")
  return (
    <>
      <button onClick={() => setUniversitieName("")}>name=''</button>
      <button onClick={() => setUniversitieName("pr")}>name='pr'</button>
      <button onClick={() => setUniversitieName("prague")}>
        name='prague'
      </button>
      <button onClick={() => setUniversitieName("Czech Technical")}>
        name="Czech Technical"
      </button>
      <Universities filterBy={universitieName} />
      {/* <SimpleFormPage /> */}
      {/* <ReactHookFormPage /> */}
    </>
  )
}

export default App
