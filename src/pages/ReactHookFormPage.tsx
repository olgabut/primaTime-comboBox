import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ComboBox } from "../components/ComboBox/ComboBox"
import { Input } from "../components/Input/Input"

export default function ReactHookFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "Jone",
      lastName: "Ford",
      // address: "123",
      street: "",
      home: "home2",
    },
  })

  const handleSubmitReactHookForm = (data: any) => {
    console.log("SUBMIT")
    console.log(data)
  }
  useEffect(() => {
    setValue("home", "222")
  }, [])
  const setStreet = useCallback((value: string) => {
    console.log("input value", value)
    setValue("street", value)
  }, [])

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

      {/* <div>
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
      </div> */}

      <div>
        <Input
          type="text"
          label="Home"
          // name="home"
          placeholder="Your home"
          error={errors.home}
          {...register("home", {
            required: true,
            minLength: {
              value: 3,
              message: "Please enter a minimum of 3 characters",
            },
          })}
        />
      </div>

      <div>
        <ComboBox
          label="Street"
          error={errors.street}
          setValue={setStreet}
          {...register("street", {
            required: true,
            minLength: {
              value: 4,
              message: "Please enter a minimum of 4 characters",
            },
          })}
        />
      </div>
      <button
        onClick={() => {
          setValue("street", "pr")
        }}
      >
        set='pr'
      </button>
      <button
        onClick={() => {
          setValue("street", "prague")
        }}
      >
        set='prague'
      </button>

      <input type="submit" value="submit" />
    </form>
  )
}
