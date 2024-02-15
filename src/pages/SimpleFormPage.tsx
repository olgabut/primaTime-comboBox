import { useState } from "react"

export default function SimpleFormPage() {
  const [state, setState] = useState({
    firstName: "Jone",
    lastName: "Ford",
  })
  const handleInput = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value })
    console.log(event)
  }

  const handleSubmitSimpleForm = (event: any) => {
    event.preventDefault()
    const data = { ...state }
    console.log(data)
    console.log("Submited simple form")
  }
  console.log("Render simple form")
  return (
    <form onSubmit={handleSubmitSimpleForm} id="simpleForm">
      <h1>Simple form</h1>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Your first Name"
          value={state.firstName}
          onChange={handleInput}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Your last Name"
          value={state.lastName}
          onChange={handleInput}
        />
      </div>

      <input type="submit" value="submit" />
    </form>
  )
}