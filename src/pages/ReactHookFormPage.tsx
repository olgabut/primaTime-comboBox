import { useForm } from "react-hook-form"
import Input from "../components/Input/Input"

export default function ReactHookFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Jone",
      lastName: "Ford",
      address: "123",
    },
  })

  const handleSubmitReactHookForm = (data: any) => {
    console.log("SUBMIT")
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitReactHookForm)} id="reactHookForm">
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

      <div>
        <Input
          type="text"
          name="address"
          label="Address"
          placeholder="Your address"
          disabled={false}
          error={errors.address}
          register={register}
          validationSchema={{
            required: true,
            minLength: {
              value: 3,
              message: "Please enter a minimum of 3 characters",
            },
          }}
        />
      </div>

      <input type="submit" value="submit" />
    </form>
  )
}
