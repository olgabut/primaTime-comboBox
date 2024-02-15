import { useForm } from "react-hook-form"

export default function ReactHookFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Jone",
      lastName: "Ford",
    },
  })

  const handleSubmitReactHookForm = (data: any) => {
    console.log(data)
    console.log("Submited react hook form")
  }

  console.log("Render react hook form")

  return (
    <form onSubmit={handleSubmit(handleSubmitReactHookForm)} id="simpleForm">
      <h1>React hook form</h1>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "This is required" })}
          placeholder="Your first Name"
        />
        <p>{errors.firstName?.message}</p>
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", {
            required: "This is required",
            minLength: { value: 4, message: "Min length is 4." },
          })}
          placeholder="Your last Name"
        />
        <p>{errors.lastName?.message}</p>
      </div>

      <input type="submit" value="submit" />
    </form>
  )
}
