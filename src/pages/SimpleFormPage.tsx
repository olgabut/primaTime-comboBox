import { useState } from "react"
import { ComboBox } from "../components/ComboBox/ComboBox"
import { Input } from "../components/Input/Input"
import useInput from "../hooks/useInput"

export default function SimpleFormPage() {
  const [state, setState] = useState({
    firstName: { value: "Jone" },
    lastName: { value: "Ford" },
  })

  const address = useInput("")
  const street = useInput("ss")
  const handleInput = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value })
    console.log(event)
  }

  const handleSubmitSimpleForm = (event: any) => {
    event.preventDefault()
    console.log("SUBMIT")
    const data = { ...state }
    console.log("address", address.value)
    console.log("street", street.value)
    console.log(data)
  }

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
          value={state.firstName.value}
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
          value={state.lastName.value}
          onChange={handleInput}
        />
      </div>

      <div>
        <Input
          type="text"
          name="address"
          label="Address"
          {...address}
          placeholder="Your address"
          // error={{ message: "err" }}
        />
      </div>

      <div>
        <ComboBox name="street" label="Street" {...street} />
      </div>

      <input type="submit" value="submit" />
    </form>
  )
}
