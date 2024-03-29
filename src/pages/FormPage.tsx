import { useForm } from "react-hook-form"
import { ComboBox } from "../components/ComboBox/ComboBox"
import { Input } from "../components/Input/Input"

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      universitie: "",
    },
  })

  const handleSubmitForm = (data: {
    firstName: string
    universitie: string
  }) => {
    alert(
      ` Jméno: ${data.firstName}, Univerzita: ${
        data.universitie || "nevyplněno"
      }`
    )
  }

  return (
    <div className="container">
      <header>
        <h2>Formulář</h2>
      </header>
      <div className="content">
        <section>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
              <Input
                type="text"
                label="Vaše křestní jméno"
                placeholder=""
                error={errors.firstName}
                {...register("firstName", {
                  required: "Toto pole je povinné",
                })}
              />
            </div>

            <div>
              <ComboBox
                label="Univerzita na kterou chodíte"
                error={errors.universitie}
                setValue={(value: string): void => {
                  setValue("universitie", value)
                }}
                {...register("universitie")}
              />
            </div>

            <input
              type="submit"
              value="Odeslat"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            />
          </form>
        </section>
        <footer>@Olga Butolina</footer>
      </div>
    </div>
  )
}
